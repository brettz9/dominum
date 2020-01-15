// Todo (high): Add way to populate and retrieve

/**
 * This class is of the "live" `NodeList` variety (unlike say the `NodeList`
 * given by `document.querySelectorAll`), meaning its `length` is dynamic
 * as items are added to the list.
 */
class NodeList {
  constructor () {
    // eslint-disable-next-line consistent-this
    const target = this;
    Object.defineProperties(target, {
      length: {
        value: 0
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

export default NodeList;
