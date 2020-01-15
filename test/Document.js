import Document from '../src/Document.js';

describe('Document', function () {
  it('createComment', function () {
    const doc = new Document();
    const comment = doc.createComment();
    expect(comment.nodeType).to.equal(8);
  });
});
