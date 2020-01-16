import {
  // eslint-disable-next-line import/no-named-default
  default as NamedNodeMap, setWritingPermission
} from '../src/NamedNodeMap.js';

describe('NamedNodeMap', function () {
  it('should have `NamedNodeMap` properties (`length`)', function () {
    const namedNodeMap = new NamedNodeMap();
    expect(namedNodeMap.length).to.equal(0);
  });
  it(
    'should allow setting numeric indexes (with writing permission)',
    function () {
      const namedNodeMap = new NamedNodeMap();
      const lastValue = setWritingPermission(true);
      namedNodeMap[0] = 5;
      setWritingPermission(lastValue);
      expect(namedNodeMap[0]).to.equal(5);
      expect(namedNodeMap.length).to.equal(1);
    }
  );
  it('should allow truncating length (with writing permission)', function () {
    const namedNodeMap = new NamedNodeMap();
    const lastValue = setWritingPermission(true);
    namedNodeMap[0] = 5;
    namedNodeMap.length = 0;
    setWritingPermission(lastValue);
    expect(namedNodeMap[0]).to.equal(undefined);
    expect(namedNodeMap.length).to.equal(0);
  });
  it('should allow extending length (with writing permission)', function () {
    const namedNodeMap = new NamedNodeMap();
    const lastValue = setWritingPermission(true);
    namedNodeMap[0] = 5;
    namedNodeMap.length = 5;
    setWritingPermission(lastValue);
    expect(namedNodeMap[0]).to.equal(5);
    expect(namedNodeMap.length).to.equal(5);
  });
  it(
    'should throw in setting bad length (with writing permission)',
    function () {
      const namedNodeMap = new NamedNodeMap();
      const lastValue = setWritingPermission(true);
      namedNodeMap[0] = 5;
      expect(() => {
        namedNodeMap.length = Infinity;
      }).to.throw(RangeError, 'Unexpected length');
      setWritingPermission(lastValue);
      expect(namedNodeMap[0]).to.equal(5);
      expect(namedNodeMap.length).to.equal(1);
    }
  );
  it(
    'should throw in setting non-writable length (with initial writing ' +
    'permission)',
    function () {
      const namedNodeMap = new NamedNodeMap();
      const lastValue = setWritingPermission(true);
      namedNodeMap[0] = 5;
      // eslint-disable-next-line compat/compat
      Object.defineProperty(namedNodeMap, 'length', {
        value: namedNodeMap.length,
        writable: false
      });
      expect(() => {
        namedNodeMap.length = 0;
      }).to.throw(TypeError);
      setWritingPermission(lastValue);
      expect(namedNodeMap[0]).to.equal(5);
      expect(namedNodeMap.length).to.equal(1);
    }
  );
  it('should allow setting and deleting other properties', function () {
    const namedNodeMap = new NamedNodeMap();
    namedNodeMap.test = 5;
    expect(namedNodeMap.test).to.equal(5);
    expect(namedNodeMap.length).to.equal(0);
    delete namedNodeMap.test;
    expect(namedNodeMap.test).to.equal(undefined);
    expect(namedNodeMap.length).to.equal(0);
  });
  it('should normally throw in setting indexes', function () {
    const nodeList = new NamedNodeMap();
    expect(nodeList.length).to.equal(0);
    expect(() => {
      nodeList[0] = 5;
    }).to.throw(Error);
    expect(nodeList[0]).to.equal(undefined);
  });
});
