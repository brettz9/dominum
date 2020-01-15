import HTMLDocument from '../src/HTMLDocument.js';
import DOMException from '../src/DOMException.js';
import DocumentType from '../src/DocumentType.js';

describe('HTMLDocument', function () {
  it('inherits from Document', function () {
    const doc = new HTMLDocument();
    expect(doc).to.have.property('implementation');
  });
  it('can build a title and doctype', function () {
    const doc = new HTMLDocument('myTitle', new DocumentType('html'));
    const doctype = doc.childNodes[0];
    expect(doctype.nodeType).to.equal(10);
    const htmlElement = doc.childNodes[1];
    expect(htmlElement.localName).to.equal('html');
    const head = htmlElement.childNodes[0];
    expect(head.nodeType).to.equal(1);
    const title = head.childNodes[0];
    expect(title.localName).to.equal('title');
    expect(title.childNodes[0].data).to.equal('myTitle');
  });
  it('createComment', function () {
    const doc = new HTMLDocument();
    const comment = doc.createComment();
    expect(comment.nodeType).to.equal(8);
  });
  it('createProcessingInstruction', function () {
    const doc = new HTMLDocument();
    const procInst = doc.createProcessingInstruction();
    expect(procInst.nodeType).to.equal(7);
  });
  it('createAttribute', function () {
    const doc = new HTMLDocument();
    const attr = doc.createAttribute('abc');
    expect(attr.nodeType).to.equal(2);
    expect(attr.name).to.equal('abc');
    expect(attr.value).to.equal('');
  });
  it('createTextNode', function () {
    const doc = new HTMLDocument();
    const text = doc.createTextNode('some text');
    expect(text.nodeType).to.equal(3);
    expect(text.data).to.equal('some text');
  });
  it('createCDATASection', function () {
    const doc = new HTMLDocument();
    expect(() => {
      doc.createCDATASection();
    }).to.throw(DOMException, 'Operation is not supported');
  });
  it('createElement', function () {
    const doc = new HTMLDocument();
    const element = doc.createElement('a');
    expect(element.nodeType).to.equal(1);
    expect(element.localName).to.equal('a');
    expect(element.nodeName).to.equal('A');
    expect(element.tagName).to.equal('A');
  });
});
describe('Document#implementation', function () {
  it('createHTMLDocument', function () {
    const doc = new HTMLDocument();
    const htmlDoc = doc.implementation.createHTMLDocument('aTitle');
    expect(htmlDoc.nodeType).to.equal(9);
  });
});
