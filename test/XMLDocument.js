import XMLDocument from '../src/XMLDocument.js';

describe('XMLDocument', function () {
  it('createComment', function () {
    const doc = new XMLDocument('', '');
    const comment = doc.createComment();
    expect(comment.nodeType).to.equal(8);
  });
});
