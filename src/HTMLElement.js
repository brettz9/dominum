class HTMLElement extends Element {
  constructor (name, ownerDocument) {
    super(name, 'http://www.w3.org/1999/xhtml', null, ownerDocument);

    this.localName = name.toLowerCase();
    // `tagName` and `nodeName` are not needed by w3c-xmlserializer, but
    //   unobtrusive and basic enough to add
    const tagName = name.toUpperCase();
    this.tagName = tagName;
    this.nodeName = tagName;

    if (name === 'template') {
      this.content = ownerDocument.createDocumentFragment();
    }
  }
}

export default HTMLElement;
