let allowWrite;
/**
 * @param {boolean} isAllowed
 * @returns {void}
 */
function setWritingPermission (isAllowed) {
  allowWrite = isAllowed;
}

/**
 * @see https://tc39.es/ecma262/#_ref_3065
 * @param {string} p
 * @returns {boolean}
 */
function isArrayIndex (p) {
  // https://tc39.es/ecma262/#_ref_3065
  // "A String property name P is an array index if and only if
  //   ToString(ToUint32(P)) is equal to P and ToUint32(P) is not
  //   equal to 2^32 - 1."

  // ToUint32
  // eslint-disable-next-line no-bitwise
  const uint = p >>> 0;

  // ToString
  // eslint-disable-next-line no-implicit-coercion
  const s = uint + '';
  return p === s && uint !== 0xFFFFFFFF;
}

/**
 * @param {GenericObject} target
 * @param {boolean} writable
 * @returns {Proxy<any>}
 */
function arrayExoticObject (target, writable) {
  Object.defineProperties(target, {
    length: {
      value: 0,
      writable
    },
    [Symbol.iterator]: {
      value () {
        let index = 0;

        return {
          next () {
            return {
              value: target[index++],
              done: index > target.length
            };
          }
        };
      }
    }
  });
  return new Proxy(target, {
    set (target, property, value, receiver) {
      // https://tc39.es/ecma262/#sec-array-exotic-objects-defineownproperty-p-desc
      if (property === 'length') {
        // https://tc39.es/ecma262/#sec-arraysetlength

        // 3. ToUint32
        // eslint-disable-next-line no-bitwise
        const newLen = value >>> 0;

        // 4. ToNumber as through `+`: https://tc39.es/ecma262/#sec-unary-plus-operator-runtime-semantics-evaluation
        // eslint-disable-next-line no-implicit-coercion
        const numberLen = +value;

        if (newLen !== numberLen) {
          // 5.
          throw RangeError('Unexpected length');
        }
        // 7-9
        const oldLen = target.length;
        // 10.
        if (newLen >= oldLen) {
          // 10.a.
          return Reflect.set(target, 'length', newLen);
        }
        // 14.
        const succeeded = Reflect.set(target, 'length', newLen);
        if (!succeeded) {
          // 15.
          return false;
        }
        // 16.
        if (Object.keys(target).filter((key) => {
          return isArrayIndex(key) && parseInt(key) >= newLen;
        }).map((key) => {
          return parseInt(key);
        }).sort((a, b) => {
          // Reverse numerical
          return a > b ? -1 : a < b ? 1 : 0;
        }).some((p) => {
          // 16.a.
          const deleteSucceeded = Reflect.deleteProperty(target, p);
          // 16.b.
          if (!deleteSucceeded) {
            // 16.b.i., 16.b.iii
            // eslint-disable-next-line no-bitwise
            Reflect.set(target, 'length', p >>> 0 + 1);
            return true;
          }
          return false;
        })) {
          // 16.b.iv.
          return false;
        }

        // 18.
        return true;
      } else if (isArrayIndex(property)) {
        // a. (b. is an assert)
        const oldLenDesc = Reflect.getOwnPropertyDescriptor(target, 'length');

        // c.
        const oldLen = oldLenDesc.value;

        // d. (ToUint32)
        // eslint-disable-next-line no-bitwise
        const index = property >>> 0;

        // e.
        if (index >= oldLen && !allowWrite && oldLenDesc.writable === false) {
          return false;
        }

        // f.
        const succeeded = Reflect.set(target, property, value);

        // g.
        if (!succeeded) {
          return false;
        }

        // h.
        if (index >= oldLen) {
          // h.i. and h.ii.
          Reflect.set(target, 'length', index + 1);
        }

        // i.
        return true;
      }
      // https://tc39.es/ecma262/#sec-ordinarydefineownproperty
      target[property] = value;
      return true;
    }
  });
}

export {arrayExoticObject, setWritingPermission};
