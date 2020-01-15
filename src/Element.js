import Node from './Node.js';
import NamedNodeMap from './NamedNodeMap.js';

import ParentNode from './mixins/ParentNode.js';
import ChildNode from './mixins/ChildNode.js';

class Element extends Node {
  constructor (qualifiedNameStr, namespaceURI) {
    super();
    const [prefix, name] = qualifiedNameStr.includes(':')
      ? qualifiedNameStr.split(':')
      : [null, qualifiedNameStr];

    this.attributes = new NamedNodeMap();
    this.namespaceURI = namespaceURI || null;
    this.prefix = prefix;

    // `tagName` and `nodeName` are not needed by w3c-xmlserializer, but
    //   unobtrusive and basic enough to add
    this.localName = name;
    this.tagName = name;
    this.nodeName = name;

    Object.assign(this, ParentNode, ChildNode);
  }
  // Todo (high): Add `removeAttributeNode`, `setAttributeNode`,
  //   `setAttributeNodeNS`, and use `new Attr()` for new ones
}
Element.prototype.nodeType = 1;

export default Element;
