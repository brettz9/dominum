import Document from '../src/Document.js';

describe('Document', function () {
  it('Has `Document` properties', function () {
    const doc = new Document();
    expect(doc).to.have.property('implementation');
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
});

describe('Document#implementation', function () {
  it('createHTMLDocument', function () {
    const doc = new Document();
    const htmlDoc = doc.implementation.createHTMLDocument('aTitle');
    expect(htmlDoc.nodeType).to.equal(9);
  });
  it('createDocument', function () {
    const doc = new Document('', '');
    const htmlDoc = doc.implementation.createDocument('aNamespace', 'aName');
    expect(htmlDoc.nodeType).to.equal(9);
  });
});
