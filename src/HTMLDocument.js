// eslint-disable-next-line import/no-named-default
import {default as HTMLDocument, setImplementation} from './HTMLDocument_.js';
import XMLDocument from './XMLDocument.js';

setImplementation(XMLDocument);

export default HTMLDocument;
