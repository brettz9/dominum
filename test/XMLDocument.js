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
