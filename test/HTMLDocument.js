import HTMLDocument from '../src/HTMLDocument.js';

describe('HTMLDocument', function () {
  it('createComment', function () {
    const doc = new HTMLDocument();
    const comment = doc.createComment();
    expect(comment.nodeType).to.equal(8);
  });
});
