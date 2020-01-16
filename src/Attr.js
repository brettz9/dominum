import Node from './Node.js';

class Attr extends Node {
  constructor (qualifiedNameStr, ownerElement, ns) {
    super();
    const hasPrefix = qualifiedNameStr.includes(':');
    const [prefix, localName] = ns !== undefined && hasPrefix
      ? qualifiedNameStr.split(':')
      : [null, qualifiedNameStr];
    // Note: If `ns` is `null` (as with `createAttributeNS`), does not
    //   get lower-cased.
    // Though these properties are not needed when w3c-xmlserializer directly
    //  serializes Attr, they are needed when part of `Element.attributes`,
    //  so we ensure constructor can build minimal data (could add on methods
    //  that manipulate `attributes`, but other `Attr` creators can use anyways)
    const name = ns === undefined && !hasPrefix
      ? qualifiedNameStr.toLowerCase()
      : qualifiedNameStr;
    this.value = '';
    this.prefix = prefix || null;
    this.namespaceURI = ns !== undefined ? ns : null;

    this.localName = ns === undefined && !hasPrefix
      ? localName.toLowerCase()
      : localName;
    // `name` and `nodeName` are not needed by w3c-xmlserializer, but
    //   unobtrusive and basic enough to add
    this.name = name;
    this.nodeName = name;

    // Not needed for w3c-serializer, but needed for
    //  `document.evaluate`-retrieved `Attr`
    this.ownerElement = ownerElement || null;
  }
}
Attr.prototype.nodeType = 2;

export default Attr;
