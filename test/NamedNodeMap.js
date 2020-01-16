import NamedNodeMap from '../src/NamedNodeMap.js';

describe('NamedNodeMap', function () {
  it('should have `NamedNodeMap` properties (`length`)', function () {
    const namedNodeMap = new NamedNodeMap();
    expect(namedNodeMap.length).to.equal(0);
  });
  it('should allow setting other properties', function () {
    const namedNodeMap = new NamedNodeMap();
    namedNodeMap.test = 5;
    expect(namedNodeMap.test).to.equal(5);
    expect(namedNodeMap.length).to.equal(0);
  });
});
