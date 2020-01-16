// While https://github.com/web-platform-tests/wpt would be ideal, as
//  done by jsdom at https://github.com/jsdom/jsdom/tree/master/test/web-platform-tests
//  (or done in part at IndexedDBShim), given the specialized browser
//  environment, it is easier for now to just start our own here.

import {
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

  createHTMLDocument
} from '../src/index.js';

describe('Dominum API', function () {
  it('has classes', function () {
    [
      DOMException,
      Node,
      NamedNodeMap, NodeList,
      Element, HTMLElement,
      Attr,
      DocumentFragment,
      ProcessingInstruction,
      CharacterData, Comment,
      Text, CDATASection,
      DocumentType,
      Document, HTMLDocument, XMLDocument
    ].forEach((clss) => {
      expect(clss).to.be.a('function');
    });
  });
  it('has mixins', function () {
    [
      ParentNode, ChildNode
    ].forEach((clss) => {
      expect(clss).to.be.an('object');
    });
  });
  it('has `createHTMLDocument` utility', function () {
    expect(createHTMLDocument).to.be.a('function');
  });
  it('`createHTMLDocument` should create an HTML document', function () {
    const doc = createHTMLDocument();
    expect(doc.nodeType).to.equal(9);
    expect(doc.childNodes.length).to.equal(2);
    expect(doc.childNodes[0].nodeType).to.equal(10);
    expect(doc.childNodes[1].nodeType).to.equal(1);
    expect(() => {
      doc.createCDATASection();
    }).to.throw(DOMException, 'Operation is not supported');
  });

  it(
    '`createHTMLDocument` should create an HTML document without a doctype',
    function () {
      const doc = createHTMLDocument({doctype: false});
      expect(doc.nodeType).to.equal(9);
      expect(doc.childNodes.length).to.equal(1);
      expect(doc.childNodes[0].nodeType).to.equal(1);
      expect(() => {
        doc.createCDATASection();
      }).to.throw(DOMException, 'Operation is not supported');
    }
  );
});
