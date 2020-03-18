/* eslint-disable class-methods-use-this */
/**
 * @file A very minimal `document` polyfill.
 */

import ParentNode from './mixins/ParentNode.js';
import Node from './Node.js';
import Element from './Element.js';
import Comment from './Comment.js';
import Attr from './Attr.js';
import Text from './Text.js';
import DocumentFragment from './DocumentFragment.js';
import ProcessingInstruction from './ProcessingInstruction.js';
import DocumentType from './DocumentType.js';

/**
 * `Document`
 */
class Document extends Node {
  /**
   * @param {DocumentType} documentType
   * @param {Element} documentElement
   */
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
  /**
   * @param {string} data
   * @returns {Comment}
   */
  createComment (data) {
    return new Comment(data);
  }
  /**
   * @param {string} target
   * @param {string} data
   * @returns {ProcessingInstruction}
   */
  createProcessingInstruction (target, data) {
    return new ProcessingInstruction(target, data);
  }
  /**
   * @param {string} name
   * @returns {Attr}
   */
  createAttribute (name) {
    return new Attr(name);
  }
  /**
   * @returns {DocumentFragment}
   */
  createDocumentFragment () {
    return new DocumentFragment();
  }
  /**
   * @param {string} data
   * @returns {Text}
   */
  createTextNode (data) {
    return new Text(data);
  }
  /**
   * `createElement`'s namespace differs on HTML vs. XML documents, but not
   * apparently with `createElementNS`.
   * @param {string} namespace
   * @param {string} elem
   * @returns {Element}
   */
  createElementNS (namespace, elem) {
    return new Element(elem, namespace, this);
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
