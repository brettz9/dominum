import Element from './Element.js';
import Attr from './Attr.js';
import DocumentFragment from './DocumentFragment.js';
import {setWritingPermission} from './NamedNodeMap.js';

/**
 * `HTMLElement`
 */
class HTMLElement extends Element {
  /**
   * @param {string} name
   * @param {HTMLDocument} ownerDocument
   */
  constructor (name, ownerDocument) {
    super(name, 'http://www.w3.org/1999/xhtml', ownerDocument);

    this.localName = name.toLowerCase();
    // `tagName` and `nodeName` are not needed by w3c-xmlserializer, but
    //   unobtrusive and basic enough to add
    const tagName = name.toUpperCase();
    this.tagName = tagName;
    this.nodeName = tagName;

    if (name === 'template') {
      // Create without an owner for now as not (yet?) specific to
      //  `document` instance
      this.content = !ownerDocument
        ? new DocumentFragment()
        : ownerDocument.createDocumentFragment();
    }
  }

  /**
   * Note: doesn't actually set a namespace in HTML.
   * @param {string} ns
   * @param {string} qualifiedName
   * @param {string} value
   * @returns {void}
   */
  setAttributeNS (ns, qualifiedName, value) {
    for (const att of this.attributes) {
      if (att.name === qualifiedName) {
        att.value = value;
        return;
      }
    }
    const attr = new Attr(qualifiedName, this);
    attr.value = value;

    const lastValue = setWritingPermission(true);
    this.attributes[this.attributes.length] = attr;
    setWritingPermission(lastValue);
  }
}

export default HTMLElement;
