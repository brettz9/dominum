import Node from './Node.js';
import ChildNode from './mixins/ChildNode.js';

/**
 * `DocumentType`
 */
class DocumentType extends Node {
  /**
   * @param {string} name
   * @param {string} [publicId='']
   * @param {string} [systemId='']
   */
  constructor (name, publicId = '', systemId = '') {
    super();
    this.name = name;
    this.publicId = publicId;
    this.systemId = systemId;
    this.nodeName = name; // Not needed w3c-xmlserializer
    Object.assign(this, ChildNode);
  }
}
DocumentType.prototype.nodeType = 10;

export default DocumentType;
