import Comment from '../src/Comment.js';

describe('Comment', function () {
  it('should have `Node` properties', function () {
    const comment = new Comment('some data');
    expect(comment.nodeType).to.equal(8);
    expect(comment.parentNode).to.equal(null);
  });
  it('should have `Comment` properties (`data`)', function () {
    const comment = new Comment('some data');
    expect(comment.data).to.equal('some data');
  });
  it('should serialize properly', function () {
    const expected = '<!--some data-->';
    const comment = new Comment('some data');
    const result = xmlserializer(comment);
    expect(result).to.equal(expected);
  });
  it('should have `ChildNode` properties (`remove`)', function () {
    const comment = new Comment('some data');
    expect(comment.remove).to.be.a('function');
    expect(() => {
      const ret = comment.remove();
      expect(ret).to.be.undefined;
    }).to.not.throw();
  });
});
