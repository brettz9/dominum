// Todo (high): Add (standard?) way to populate and retrieve (and remove
//   `_namedNodeMapArrayImpl` as export?)

/**
 * This class is "live", meaning its `length` is dynamic
 * as items are added to the list.
 */
class NamedNodeMap {
  constructor () {
    // eslint-disable-next-line consistent-this
    const target = this;
    Object.defineProperties(target, {
      length: {
        value: 0,
        writable: true
      },
      [Symbol.iterator]: {
        value () {
          let index = 0;

          return {
            next () {
              return {
                value: target[index++],
                done: index >= target.length
              };
            }
          };
        }
      }
    });
  }
}

export default NamedNodeMap;
