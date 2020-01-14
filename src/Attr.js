import Node from './Node.js';

class Attr extends Node {
  constructor (name, ownerElement, ns) {
    super();
    // Though these properties are not needed when w3c-xmlserializer directly
    //  serializes Attr, they are needed when part of `Element.attributes`,
    //  so we ensure constructor can build minimal data (could add on methods
    //  that manipulate `attributes`, but other `Attr` creators can use anyways)
    this.localName = ns === undefined ? name.toLowerCase() : name;
    // attr.name = name; // Not needed by w3c-xmlserializer
    //  (extender of `createAttribute` can wrap to add if needed)
    this.value = '';
    this.prefix = null;
    this.namespaceURI = null;

    // Not needed for w3c-serializer, but needed for
    //  `document.evaluate`-retrieved `Attr`
    this.ownerElement = ownerElement || null;
  }
}
Attr.prototype.nodeType = 2;

export default Attr;
