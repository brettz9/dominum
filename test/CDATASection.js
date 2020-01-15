import CDATASection from '../src/CDATASection.js';

describe('CDATASection', function () {
  it('should have `Node` properties', function () {
    const cdata = new CDATASection('some data');
    expect(cdata.nodeType).to.equal(4);
    expect(cdata.parentNode).to.equal(null);
  });
  it('should have `CDATASection` properties (`data`)', function () {
    const cdata = new CDATASection('some data');
    expect(cdata.data).to.equal('some data');
  });
  it('should serialize properly', function () {
    const expected = '<![CDATA[some data]]>';
    const cdata = new CDATASection('some data');
    const result = xmlserializer(cdata);
    expect(result).to.equal(expected);
  });
  it('should have `ChildNode` properties (`remove`)', function () {
    const cdata = new CDATASection('some data');
    expect(cdata.remove).to.be.a('function');
    expect(() => {
      const ret = cdata.remove();
      expect(ret).to.be.undefined;
    }).to.not.throw();
  });
});
