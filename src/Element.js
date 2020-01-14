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
    // Could add tagName, nodeName, but extenders of `createElement`,
    //   etc. can wrap.
    this.localName = name;
    this.namespaceURI = namespaceURI;
    this.prefix = prefix;

    Object.assign(this, ParentNode, ChildNode);
  }
  // Todo (high): Add `removeAttributeNode`, `setAttributeNode`,
  //   `setAttributeNodeNS`, and use `new Attr()` for new ones
}
Element.prototype.nodeType = 1;

export default Element;
