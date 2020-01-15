import Node from './Node.js';
import ParentNode from './mixins/ParentNode.js';

class DocumentFragment extends Node {
  constructor () {
    super();
    this.nodeName = '#document-fragment'; // Not needed w3c-xmlserializer
    Object.assign(this, ParentNode);
  }
}
DocumentFragment.prototype.nodeType = 11;

export default DocumentFragment;
