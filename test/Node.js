import Node from '../src/Node.js';
import DOMException from '../src/DOMException.js';

describe('Node', function () {
  it('should have `Node` properties (`parentNode`, `childNodes`)', function () {
    const node = new Node();
    expect(node.parentNode).to.equal(null);
    expect(node.childNodes.length).to.equal(0);
  });
  it('should have `Node` methods (`removeChild`)', function () {
    const node = new Node();
    expect(node.removeChild).to.be.a('function');
    expect(() => {
      node.removeChild();
    }).to.throw(DOMException, 'Node was not found');
  });
});
