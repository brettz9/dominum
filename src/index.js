import Document from './Document.js';
import HTMLDocument from './HTMLDocument.js';

export {default as DOMException} from './DOMException.js';

export {
  default as NodeList,
  setWritingPermission as setNodeListWritingPermission
} from './NodeList.js';
export {
  default as NamedNodeMap,
  setWritingPermission as setNamedNodeMapWritingPermission
} from './NamedNodeMap.js';

export {default as Element} from './Element.js';
export {default as HTMLElement} from './HTMLElement.js';
export {default as Attr} from './Attr.js';
export {default as Node} from './Node.js';
export {default as DocumentFragment} from './DocumentFragment.js';
export {default as ProcessingInstruction} from './ProcessingInstruction.js';
export {default as CharacterData} from './CharacterData.js';
export {default as Comment} from './Comment.js';
export {default as Text} from './Text.js';
export {default as CDATASection} from './CDATASection.js';
export {default as DocumentType} from './DocumentType.js';
export {default as XMLDocument} from './XMLDocument.js';

export {default as ParentNode} from './mixins/ParentNode.js';
export {default as ChildNode} from './mixins/ChildNode.js';

/**
 * A non-standard utility to more easily create documents (especially useful
 * if an empty doctype is desired).
 * @param {PlainObject} [cfg]
 * @param {string} [cfg.title=undefined]
 * @param {boolean} [cfg.doctype=true}]
 * @returns {HTMLDocument}
 */
const createHTMLDocument = ({title = undefined, doctype = true} = {}) => {
  return new HTMLDocument(
    title,
    doctype
      ? Document.prototype.implementation.createDocumentType.call(null, 'html')
      : undefined
  );
};

export {
  Document, HTMLDocument,

  // Note that the following Nodes (`nodeType` in parentheses) have been
  // removed in DOM4, so are not available:
  //   ENTITY_REFERENCE_NODE (5), ENTITY_NODE (6), NOTATION_NODE (12)

  // Custom
  createHTMLDocument
};
