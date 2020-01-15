import {
  // eslint-disable-next-line import/no-named-default
  default as Document, setImplementation as setImpl
} from './Document_.js';
import HTMLElement from './HTMLElement.js';
import DOMException from './DOMException.js';

class HTMLDocument extends Document {
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
  createElement (elem) {
    return new HTMLElement(elem, this);
  }

  // eslint-disable-next-line class-methods-use-this
  createCDATASection (data) {
    throw new DOMException('Operation is not supported', 'NotSupportedError');
  }
}

const setImplementation = (XMLDocument) => {
  setImpl(HTMLDocument, XMLDocument);
};

export {setImplementation};
export default HTMLDocument;
