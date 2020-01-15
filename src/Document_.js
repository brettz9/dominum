/* eslint-disable class-methods-use-this */
/**
 * @file A very minimal `document` polyfill.
 */

import ParentNode from './mixins/ParentNode.js';
import Node from './Node.js';
import Comment from './Comment.js';
import Attr from './Attr.js';
import Text from './Text.js';
import DocumentFragment from './DocumentFragment.js';
import ProcessingInstruction from './ProcessingInstruction.js';
import DocumentType from './DocumentType.js';

class Document extends Node {
  constructor (documentType, documentElement) {
    super();
    this.nodeName = '#document'; // Not needed w3c-xmlserializer
    Object.assign(this, ParentNode);
    if (documentType) {
      this.doctype = documentType;
      this.append(documentType);
    }
    if (documentElement) {
      this.append(documentElement);
    }

    this.documentElement = documentElement || null;
  }
  createComment (data) {
    return new Comment(data);
  }
  createProcessingInstruction (target, data) {
    return new ProcessingInstruction(target, data);
  }
  createAttribute (name) {
    return new Attr(name);
  }
  createDocumentFragment () {
    return new DocumentFragment();
  }
  createTextNode (data) {
    return new Text(data);
  }
}
Document.prototype.nodeType = 9;

/**
 * We need this to avoid TDZ problems from circular dependencies between
 * `Document` and `HTMLDocument`/`XMLDocument`.
 * @param {HTMLDocument} HTMLDocument
 * @param {XMLDocument} XMLDocument
 * @returns {void}
 */
function setImplementation (HTMLDocument, XMLDocument) {
  Document.prototype.implementation = {
    createDocumentType (name, publicId, systemId) {
      return new DocumentType(name, publicId, systemId);
    },
    createDocument (namespaceURI, qualifiedNameStr, documentType = null) {
      return new XMLDocument(
        namespaceURI, qualifiedNameStr, documentType
      );
    },
    createHTMLDocument (title) {
      return new HTMLDocument(title, this.createDocumentType('html'));
    }
  };
}

export {setImplementation};
export default Document;
