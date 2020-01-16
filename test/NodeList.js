import NodeList from '../src/NodeList.js';

describe('NodeList', function () {
  it('should have `NodeList` properties (`length`)', function () {
    const nodeList = new NodeList();
    expect(nodeList.length).to.equal(0);
  });
  it('should allow setting other properties', function () {
    const nodeList = new NodeList();
    nodeList.test = 5;
    expect(nodeList.test).to.equal(5);
    expect(nodeList.length).to.equal(0);
  });

  it('should normally throw in setting indexes', function () {
    const nodeList = new NodeList();
    expect(nodeList.length).to.equal(0);
    expect(() => {
      nodeList[0] = 5;
    }).to.throw(Error);
    expect(nodeList[0]).to.equal(undefined);
  });
});
