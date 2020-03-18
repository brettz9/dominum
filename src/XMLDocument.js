// eslint-disable-next-line import/no-named-default
import {default as Document, setImplementation} from './Document_.js';
import Element from './Element.js';
import CDATASection from './CDATASection.js';

/**
 * `XMLDocument`.
 *
 * Note that the distinctive argument, `title` used with `HTMLDocument`
 * returns an empty string for XML document (though it seems this is a
 * browser or spec bug and it should not be defined at all).
 */
class XMLDocument extends Document {
  /**
   * @param {string} namespaceURI
   * @param {string} qualifiedNameStr
   * @param {DocumentType} documentType
   */
  constructor (namespaceURI, qualifiedNameStr, documentType) {
    super(documentType);
    const documentElement = new Element(qualifiedNameStr, namespaceURI, this);
    this.documentElement = documentElement;
    this.append(this.documentElement);
  }
  /**
   * @param {string} elem
   * @returns {Element}
   */
  createElement (elem) {
    return new Element(elem, null, this);
  }

  /* eslint-disable class-methods-use-this */
  /**
   * @param {string} data
   * @returns {CDATASection}
   */
  createCDATASection (data) {
    /* eslint-enable class-methods-use-this */
    return new CDATASection(data);
  }
}

export {setImplementation};
export default XMLDocument;
