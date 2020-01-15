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
});
