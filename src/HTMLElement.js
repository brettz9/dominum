class HTMLElement extends Element {
  constructor (name, ownerDocument) {
    super(name, 'http://www.w3.org/1999/xhtml', null, ownerDocument);
    if (name === 'template') {
      this.content = ownerDocument.createDocumentFragment();
    }
  }
}

export default HTMLElement;
