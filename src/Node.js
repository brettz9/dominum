import DOMException from './DOMException.js';
// eslint-disable-next-line import/no-named-default
import {default as NodeList, setWritingPermission} from './NodeList.js';

/**
 * `Node`
 */
class Node {
  /**
   * Sets up properties.
   */
  constructor () {
    this.parentNode = null;
    this.childNodes = new NodeList();
  }

  /**
   * @param {Node} arg
   * @returns {Node}
   */
  appendChild (arg) {
    const lastValue = setWritingPermission(true);
    this.childNodes[this.childNodes.length] = arg;
    setWritingPermission(lastValue);
    arg.parentNode = this;
    return arg;
  }

  /**
   * @param {Node} child
   * @returns {Node}
   */
  removeChild (child) {
    // Could replace with `some` if `NodeList` ever adds
    for (let i = 0; i < this.childNodes.length; i++) {
      if (this.childNodes[i] === child) {
        // splice one (our Proxy's `deleteProperty` to handle the rest)
        const removed = this.childNodes[i];
        delete this.childNodes[i];
        return removed;
      }
    }
    throw new DOMException('Node was not found', 'NotFoundError');
  }
}

export default Node;
