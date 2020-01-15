import NodeList from '../src/NodeList.js';

describe('NodeList', function () {
  it('should have `NodeList` properties (`length`)', function () {
    const namedNodeMap = new NodeList();
    expect(namedNodeMap.length).to.equal(0);
  });
});
