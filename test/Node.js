import Node from '../src/Node.js';
import DOMException from '../src/DOMException.js';

describe('Node', function () {
  it('should have `Node` properties (`parentNode`, `childNodes`)', function () {
    const node = new Node();
    expect(node.parentNode).to.equal(null);
    expect(node.childNodes.length).to.equal(0);
  });
  it('`Node` method `removeChild` should throw with bad argument', function () {
    const node = new Node();
    expect(node.removeChild).to.be.a('function');
    expect(() => {
      node.removeChild();
    }).to.throw(DOMException, 'Node was not found');
  });
  it('`Node` method `removeChild` should remove a child', function () {
    const node = new Node();
    expect(node.removeChild).to.be.a('function');
    expect(() => {
      node.removeChild();
    }).to.throw(DOMException, 'Node was not found');
  });
});
