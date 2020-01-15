import XMLDocument from '../src/XMLDocument.js';

describe('XMLDocument', function () {
  it('inherits from Document', function () {
    const doc = new XMLDocument('', '');
    expect(doc).to.have.property('implementation');
  });
  it('createComment', function () {
    const doc = new XMLDocument('', '');
    const comment = doc.createComment();
    expect(comment.nodeType).to.equal(8);
  });
  it('createProcessingInstruction', function () {
    const doc = new XMLDocument('', '');
    const procInst = doc.createProcessingInstruction();
    expect(procInst.nodeType).to.equal(7);
  });
  it('createAttribute', function () {
    const doc = new XMLDocument('', '');
    const attr = doc.createAttribute('abc');
    expect(attr.nodeType).to.equal(2);
    expect(attr.name).to.equal('abc');
    expect(attr.value).to.equal('');
  });
  it('createTextNode', function () {
    const doc = new XMLDocument('', '');
    const text = doc.createTextNode('some text');
    expect(text.nodeType).to.equal(3);
    expect(text.data).to.equal('some text');
  });
  it('createCDATASection', function () {
    const doc = new XMLDocument('', '');
    const cdata = doc.createCDATASection();
    expect(cdata.nodeType).to.equal(4);
  });
  it('createElement', function () {
    const doc = new XMLDocument('', '');
    const element = doc.createElement('a');
    expect(element.nodeType).to.equal(1);
    expect(element.localName).to.equal('a');
    expect(element.nodeName).to.equal('a');
    expect(element.tagName).to.equal('a');
  });
});
describe('Document#implementation', function () {
  it('createHTMLDocument', function () {
    const doc = new XMLDocument('', '');
    const htmlDoc = doc.implementation.createHTMLDocument('aTitle');
    expect(htmlDoc.nodeType).to.equal(9);
  });
});
