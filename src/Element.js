import Node from './Node.js';
import Attr from './Attr.js';
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

    this.localName = name;
    // `tagName` and `nodeName` are not needed by w3c-xmlserializer, but
    //   unobtrusive and basic enough to add
    this.tagName = name;
    this.nodeName = name;

    Object.assign(this, ParentNode, ChildNode);
  }

  setAttribute (name, value) {
    for (const att of this.attributes) {
      if (att.name === name) {
        att.value = value;
        return;
      }
    }
    const attr = new Attr(name, this);
    attr.value = value;
    this.attributes[this.attributes.length] = attr;
  }
  // Todo (high): Add `removeAttributeNode`, `setAttributeNode`,
  //   `setAttributeNodeNS`, and use `new Attr()` for new ones
}
Element.prototype.nodeType = 1;

export default Element;
