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
  it(
    'should allow overwriting numeric indexes (with writing permission)',
    function () {
      const namedNodeMap = new NamedNodeMap();
      const lastValue = setWritingPermission(true);
      namedNodeMap[0] = 5;
      // eslint-disable-next-line sonarjs/no-element-overwrite
      namedNodeMap[0] = 7;
      setWritingPermission(lastValue);
      expect(namedNodeMap[0]).to.equal(7);
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
  it(
    'should allow partially truncating length (with writing permission)',
    function () {
      const namedNodeMap = new NamedNodeMap();
      const lastValue = setWritingPermission(true);
      namedNodeMap[0] = 5;
      namedNodeMap[1] = 7;
      namedNodeMap[2] = 9;
      namedNodeMap.length = 1;
      setWritingPermission(lastValue);
      expect(namedNodeMap[0]).to.equal(5);
      expect(namedNodeMap[1]).to.equal(undefined);
      expect(namedNodeMap[2]).to.equal(undefined);
      expect(namedNodeMap.length).to.equal(1);
    }
  );
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
  /*
  it(
    'should throw in truncating with non-writable property (with initial ' +
    'writing permission)',
    function () {
      const namedNodeMap = new NamedNodeMap();
      const lastValue = setWritingPermission(true);
      namedNodeMap[0] = 5;
      // eslint-disable-next-line compat/compat
      Object.defineProperty(namedNodeMap, '0', {
        value: 5,
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
  */
  it('should allow setting and deleting other properties', function () {
    const namedNodeMap = new NamedNodeMap();
    namedNodeMap.test = 5;
    expect(namedNodeMap.test).to.equal(5);
    expect(namedNodeMap.length).to.equal(0);
    delete namedNodeMap.test;
    expect(namedNodeMap.test).to.equal(undefined);
    expect(namedNodeMap.length).to.equal(0);
  });
  /*
  it('should throw if deleting non-writable property', function () {
    const namedNodeMap = new NamedNodeMap();
    const lastValue = setWritingPermission(true);
    namedNodeMap[0] = 5;
    expect(namedNodeMap[0]).to.equal(5);
    setWritingPermission(lastValue);
    // eslint-disable-next-line compat/compat
    Object.defineProperty(namedNodeMap, '0', {
      value: 5,
      writable: false
    });
    expect(namedNodeMap[0]).to.equal(5);
    expect(namedNodeMap.length).to.equal(1);
    expect(() => {
      delete namedNodeMap[0];
    }).to.throw(TypeError);
    expect(namedNodeMap[0]).to.equal(5);
    expect(namedNodeMap.length).to.equal(1);
  });
  */
  it('should normally throw in setting indexes', function () {
    const nodeList = new NamedNodeMap();
    expect(nodeList.length).to.equal(0);
    expect(() => {
      nodeList[0] = 5;
    }).to.throw(Error);
    expect(nodeList[0]).to.equal(undefined);
  });
});
