import DOMException from './DOMException.js';
// eslint-disable-next-line import/no-named-default
import {default as NodeList, setWritingPermission} from './NodeList.js';

class Node {
  constructor () {
    this.parentNode = null;
    this.childNodes = new NodeList();
  }

  appendChild (arg) {
    const lastValue = setWritingPermission(true);
    this.childNodes[this.childNodes.length] = arg;
    setWritingPermission(lastValue);
    arg.parentNode = this;
  }

  removeChild (child) {
    // Could replace with `some` if `NodeList` ever adds
    for (let i = 0; i < this.childNodes.length; i++) {
      if (this.childNodes[i] === child) {
        return this.childNodes.splice(i, 1);
      }
    }
    throw new DOMException('Node was not found', 'NotFoundError');
  }
}

export default Node;
