import Node from './Node.js';
import ParentNode from './mixins/ParentNode.js';

class DocumentFragment extends Node {
  constructor () {
    super();
    Object.assign(this, ParentNode);
  }
}
DocumentFragment.prototype.nodeType = 11;

export default DocumentFragment;
