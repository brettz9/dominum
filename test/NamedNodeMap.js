import NamedNodeMap from '../src/NamedNodeMap.js';

describe('NamedNodeMap', function () {
  it('should have `NamedNodeMap` properties (`length`)', function () {
    const namedNodeMap = new NamedNodeMap();
    expect(namedNodeMap.length).to.equal(0);
  });
});
