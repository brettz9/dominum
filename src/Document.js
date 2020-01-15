// eslint-disable-next-line import/no-named-default
import {default as Document, setImplementation} from './Document_.js';
import HTMLDocument from './HTMLDocument.js';
import XMLDocument from './XMLDocument.js';

setImplementation(HTMLDocument, XMLDocument);

export default Document;
