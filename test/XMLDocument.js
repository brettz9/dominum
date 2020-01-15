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
});
