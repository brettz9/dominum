import xmlserializer from 'w3c-xmlserializer';
import Element from '../src/Element.js';

describe('Element', function () {
  it('should have `Node` properties', function () {
    const element = new Element('someElement');
    expect(element.nodeType).to.equal(1);
    expect(element.parentNode).to.equal(null);
  });
  it('should have `Element` properties (`tagName`, `localName`)', function () {
    const element = new Element('someElement');
    expect(element.tagName).to.equal('someElement');
    expect(element.localName).to.equal('someElement');
  });
  it('should serialize properly', function () {
    const expected = '<someElement/>';
    const element = new Element('someElement');
    const result = xmlserializer(element);
    expect(result).to.equal(expected);
  });
  it('should have `ChildNode` properties (`remove`)', function () {
    const element = new Element('someElement');
    expect(element.remove).to.be.a('function');
    expect(() => {
      const ret = element.remove();
      expect(ret).to.be.undefined;
    }).to.not.throw();
  });
});
