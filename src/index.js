// Todo: Search for `childNodes` and fix with `Proxy`
// Todo: Be sure to check `ChildNode` in tests when there is a `parentNode`

import DOMException from './DOMException.js';
import NodeList from './NodeList.js';
import NamedNodeMap from './NamedNodeMap.js';

import Element from './Element.js';
import HTMLElement from './HTMLElement.js';
import Attr from './Attr.js';
import Node from './Node.js';
import DocumentFragment from './DocumentFragment.js';
import ProcessingInstruction from './ProcessingInstruction.js';
import CharacterData from './CharacterData.js';
import Comment from './Comment.js';
import Text from './Text.js';
import CDATASection from './CDATASection.js';
import DocumentType from './DocumentType.js';
import Document from './Document.js';
import HTMLDocument from './HTMLDocument.js';
import XMLDocument from './XMLDocument.js';

import ParentNode from './mixins/ParentNode.js';
import ChildNode from './mixins/ChildNode.js';

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
  DOMException,
  Node, ParentNode, ChildNode,

  NamedNodeMap, NodeList,
  Element, HTMLElement,
  Attr,
  DocumentFragment,
  ProcessingInstruction,
  CharacterData, Comment,
  Text, CDATASection,
  DocumentType,
  Document, HTMLDocument, XMLDocument,

  // Note that the following Nodes (`nodeType` in parentheses) have been
  // removed in DOM4, so are not available:
  //   ENTITY_REFERENCE_NODE (5), ENTITY_NODE (6), NOTATION_NODE (12)

  // Custom
  createHTMLDocument
};
