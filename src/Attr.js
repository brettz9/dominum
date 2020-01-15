import Node from './Node.js';

class Attr extends Node {
  constructor (name, ownerElement, ns) {
    super();
    // Note: If `ns` is `null` (as with `createAttributeNS`), does not
    //   get lower-cased.
    // Though these properties are not needed when w3c-xmlserializer directly
    //  serializes Attr, they are needed when part of `Element.attributes`,
    //  so we ensure constructor can build minimal data (could add on methods
    //  that manipulate `attributes`, but other `Attr` creators can use anyways)
    this.localName = ns === undefined ? name.toLowerCase() : name;
    this.value = '';
    this.prefix = null;
    this.namespaceURI = null;

    // `name` is not needed by w3c-xmlserializer, but unobtrusive and basic
    //   enough to add
    this.name = name;

    // Not needed for w3c-serializer, but needed for
    //  `document.evaluate`-retrieved `Attr`
    this.ownerElement = ownerElement || null;
  }
}
Attr.prototype.nodeType = 2;

export default Attr;
