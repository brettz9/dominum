import HTMLDocument from '../src/HTMLDocument.js';

describe('HTMLDocument', function () {
  it('inherits from Document', function () {
    const doc = new HTMLDocument();
    expect(doc).to.have.property('implementation');
  });
  it('createComment', function () {
    const doc = new HTMLDocument();
    const comment = doc.createComment();
    expect(comment.nodeType).to.equal(8);
  });
});
