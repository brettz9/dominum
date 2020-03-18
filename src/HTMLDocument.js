// eslint-disable-next-line import/no-named-default
import {default as Document, setImplementation} from './Document_.js';
import HTMLElement from './HTMLElement.js';
import DOMException from './DOMException.js';

/**
 * `HTMLDocument`
 */
class HTMLDocument extends Document {
  /**
   * @param {string} title
   * @param {DocumentType} documentType
   */
  constructor (title, documentType) {
    super(documentType);
    this.documentElement = new HTMLElement('html', this);
    const head = new HTMLElement('head', this);
    if (title !== undefined) {
      const titleElement = new HTMLElement('title', this);
      titleElement.append(title);
      head.append(titleElement);
    }
    const body = new HTMLElement('body', this);
    this.documentElement.append(head, body);
    this.append(this.documentElement);
  }
  /**
   * @param {string} elem
   * @returns {HTMLElement}
   */
  createElement (elem) {
    return new HTMLElement(elem, this);
  }

  /* eslint-disable class-methods-use-this */
  /**
   * @throws {DOMException}
   */
  createCDATASection (/* data */) {
    /* eslint-enable class-methods-use-this */
    throw new DOMException('Operation is not supported', 'NotSupportedError');
  }
}

export {setImplementation};
export default HTMLDocument;
