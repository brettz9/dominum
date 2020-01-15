// eslint-disable-next-line import/no-named-default
import {default as XMLDocument, setImplementation} from './XMLDocument_.js';
import HTMLDocument from './HTMLDocument.js';

setImplementation(HTMLDocument);

export default XMLDocument;
