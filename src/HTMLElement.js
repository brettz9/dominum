class HTMLElement extends Element {
  constructor (name, ownerDocument) {
    super(name, 'http://www.w3.org/1999/xhtml', null, ownerDocument);

    // `tagName` and `nodeName` are not needed by w3c-xmlserializer, but
    //   unobtrusive and basic enough to add
    this.localName = name.toLowerCase();
    this.tagName = name.toUpperCase();
    this.nodeName = name.toUpperCase();

    if (name === 'template') {
      this.content = ownerDocument.createDocumentFragment();
    }
  }
}

export default HTMLElement;
