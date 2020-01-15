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
  it('should serialize properly with an attribute', function () {
    const expected = '<someElement abc="def"/>';
    const element = new Element('someElement');
    element.setAttribute('abc', 'def');
    const result = xmlserializer(element);
    expect(result).to.equal(expected);
  });
  it('should serialize properly with multiple attributes', function () {
    const expected = '<someElement zzz="ggg" abc="def"/>';
    const element = new Element('someElement');
    element.setAttribute('zzz', 'ggg');
    element.setAttribute('abc', 'def');
    const result = xmlserializer(element);
    expect(result).to.equal(expected);
  });
  it('`ChildNode` `remove` should not throw', function () {
    const element = new Element('someElement');
    expect(element.remove).to.be.a('function');
    expect(() => {
      const ret = element.remove();
      expect(ret).to.be.undefined;
    }).to.not.throw();
  });
  it('`ChildNode` `remove` should remove from container', function () {
    const element = new Element('someElement');
    expect(element.remove).to.be.a('function');
    const childElement = new Element('aChildElement');
    element.append(childElement);
    expect(element.childNodes.length).to.equal(1);
    expect(element.childNodes[0].localName).to.equal('aChildElement');
    expect(element.childNodes[0].nodeName).to.equal('aChildElement');
    const ret = childElement.remove();
    expect(ret).to.be.undefined;
    expect(element.childNodes.length).to.equal(0);
    expect(element.childNodes[0]).to.be.undefined;
  });
  it('should have `ParentNode` properties (`append`)', function () {
    const element = new Element('someElement');
    expect(element.append).to.be.a('function');
    expect(() => {
      const ret = element.append();
      expect(ret).to.be.undefined;
    }).to.not.throw();
  });
});
