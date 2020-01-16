import {
  // eslint-disable-next-line import/no-named-default
  default as NamedNodeMap, setWritingPermission
} from '../src/NamedNodeMap.js';

describe('NamedNodeMap', function () {
  it('should have `NamedNodeMap` properties (`length`)', function () {
    const namedNodeMap = new NamedNodeMap();
    expect(namedNodeMap.length).to.equal(0);
  });
  it('should allow setting numeric indexes', function () {
    const namedNodeMap = new NamedNodeMap();
    const lastValue = setWritingPermission(true);
    namedNodeMap[0] = 5;
    setWritingPermission(lastValue);
    expect(namedNodeMap[0]).to.equal(5);
    expect(namedNodeMap.length).to.equal(1);
  });
  it('should allow truncating length', function () {
    const namedNodeMap = new NamedNodeMap();
    const lastValue = setWritingPermission(true);
    namedNodeMap[0] = 5;
    namedNodeMap.length = 0;
    setWritingPermission(lastValue);
    expect(namedNodeMap[0]).to.equal(undefined);
    expect(namedNodeMap.length).to.equal(0);
  });
  it('should allow extending length', function () {
    const namedNodeMap = new NamedNodeMap();
    const lastValue = setWritingPermission(true);
    namedNodeMap[0] = 5;
    namedNodeMap.length = 0;
    setWritingPermission(lastValue);
    expect(namedNodeMap[0]).to.equal(undefined);
    expect(namedNodeMap.length).to.equal(0);
  });
  it('should allow setting other properties', function () {
    const namedNodeMap = new NamedNodeMap();
    namedNodeMap.test = 5;
    expect(namedNodeMap.test).to.equal(5);
    expect(namedNodeMap.length).to.equal(0);
  });
});
