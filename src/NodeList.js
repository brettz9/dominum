// Todo (high): Add way to populate and retrieve

/**
 * This class is of the "live" `NodeList` variety (unlike say the `NodeList`
 * given by `document.querySelectorAll`), meaning its `length` is dynamic
 * as items are added to the list.
 */
class NodeList {
  constructor () {
    this.length = 0;
  }
}

export default NodeList;
