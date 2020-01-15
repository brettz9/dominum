import Document from '../src/Document.js';
import DocumentType from '../src/DocumentType.js';
import Element from '../src/Element.js';

describe('Document', function () {
  it('Has `Document` properties', function () {
    const doc = new Document();
    expect(doc).to.have.property('implementation');
  });
  it('Can create with `documentElement`', function () {
    const documentType = new DocumentType('abc');
    const documentElement = new Element('def');
    const doc = new Document(documentType, documentElement);
    expect(doc.childNodes[0].name).to.equal('abc');
    expect(doc.doctype.name).to.equal('abc');
    expect(doc.childNodes[1].localName).to.equal('def');
    expect(doc.documentElement.localName).to.equal('def');
    expect(doc.documentElement.nodeType).to.equal(1);
    expect(doc.nodeType).to.equal(9);
  });
  it('createComment', function () {
    const doc = new Document();
    const comment = doc.createComment();
    expect(comment.nodeType).to.equal(8);
  });
  it('createProcessingInstruction', function () {
    const doc = new Document();
    const procInst = doc.createProcessingInstruction();
    expect(procInst.nodeType).to.equal(7);
  });
  it('createAttribute', function () {
    const doc = new Document();
    const attr = doc.createAttribute('abc');
    expect(attr.nodeType).to.equal(2);
    expect(attr.name).to.equal('abc');
    expect(attr.value).to.equal('');
  });
  it('createTextNode', function () {
    const doc = new Document();
    const text = doc.createTextNode('some text');
    expect(text.nodeType).to.equal(3);
    expect(text.data).to.equal('some text');
  });
  it('createElementNS', function () {
    const doc = new Document();
    let element = doc.createElementNS('someNamespace', 'aName');
    expect(element.nodeType).to.equal(1);
    expect(element.localName).to.equal('aName');
    expect(element.namespaceURI).to.equal('someNamespace');
    expect(element.prefix).to.equal(null);

    element = doc.createElementNS('anotherNamespace', 'somePrefix:anotherName');
    expect(element.nodeType).to.equal(1);
    expect(element.localName).to.equal('anotherName');
    expect(element.namespaceURI).to.equal('anotherNamespace');
    expect(element.prefix).to.equal('somePrefix');
  });
});

describe('Document#implementation', function () {
  it('createHTMLDocument', function () {
    const doc = new Document();
    const htmlDoc = doc.implementation.createHTMLDocument('aTitle');
    expect(htmlDoc.nodeType).to.equal(9);
  });
  it('createDocument', function () {
    const doc = new Document();
    const htmlDoc = doc.implementation.createDocument('aNamespace', 'aName');
    expect(htmlDoc.nodeType).to.equal(9);
  });
});
