import Node from './Node.js';
import Attr from './Attr.js';
// eslint-disable-next-line import/no-named-default
import {default as NamedNodeMap, setWritingPermission} from './NamedNodeMap.js';

import ParentNode from './mixins/ParentNode.js';
import ChildNode from './mixins/ChildNode.js';

class Element extends Node {
  constructor (qualifiedNameStr, ns, ownerDocument) {
    super();
    const [prefix, name] = qualifiedNameStr.includes(':')
      ? qualifiedNameStr.split(':')
      : [null, qualifiedNameStr];

    this.attributes = new NamedNodeMap();
    this.namespaceURI = ns !== undefined ? ns : null;
    this.prefix = prefix;

    this.localName = name;
    // `tagName` and `nodeName` are not needed by w3c-xmlserializer, but
    //   unobtrusive and basic enough to add
    this.tagName = name;
    this.nodeName = name;
    // Todo: Other Nodes should have also
    this.ownerDocument = ownerDocument;

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
    const lastValue = setWritingPermission(true);
    this.attributes[this.attributes.length] = attr;
    setWritingPermission(lastValue);
  }

  // Note: Won't use given prefix if already existing with a different
  //  namespace
  setAttributeNS (ns, qualifiedName, value) {
    for (const att of this.attributes) {
      const [prefix, name] = qualifiedName.includes(':')
        ? qualifiedName.split(':')
        : [null, qualifiedName];
      if (att.localName === name && att.namespaceURI === ns) {
        att.value = value;
        // Prefix may now be different, so set
        att.name = prefix !== null ? qualifiedName : name;
        att.prefix = prefix;
        return;
      }
    }
    const attr = new Attr(qualifiedName, this, ns);
    attr.value = value;
    const lastValue = setWritingPermission(true);
    this.attributes[this.attributes.length] = attr;
    setWritingPermission(lastValue);
  }

  // Todo: Add `removeAttributeNode`, `setAttributeNode`,
  //   `setAttributeNodeNS`, and use `new Attr()` for new ones
}
Element.prototype.nodeType = 1;

export default Element;
