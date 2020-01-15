import Element from './Element.js';
import DocumentFragment from './DocumentFragment.js';

class HTMLElement extends Element {
  constructor (name, ownerDocument) {
    super(name, 'http://www.w3.org/1999/xhtml', null, ownerDocument);

    this.localName = name.toLowerCase();
    // `tagName` and `nodeName` are not needed by w3c-xmlserializer, but
    //   unobtrusive and basic enough to add
    const tagName = name.toUpperCase();
    this.tagName = tagName;
    this.nodeName = tagName;

    // We add since already passing in, but other Nodes should have also
    this.ownerDocument = ownerDocument;

    if (name === 'template') {
      // Create without an owner for now as not (yet?) specific to
      //  `document` instance
      this.content = !ownerDocument
        ? new DocumentFragment()
        : ownerDocument.createDocumentFragment();
    }
  }
}

export default HTMLElement;
