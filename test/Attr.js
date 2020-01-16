import Attr from '../src/Attr.js';
import Element from '../src/Element.js';

describe('Attr', function () {
  it('should have `Node` properties', function () {
    const attr = new Attr('someName');
    expect(attr.nodeType).to.equal(2);
    expect(attr.parentNode).to.equal(null);
  });
  it('should have `Attr` propertes (`localName`)', function () {
    const attr = new Attr('aName');
    expect(attr.localName).to.equal('aname');
  });
  it('should create namespaced `Attr`', function () {
    const ownerElement = new Element('abc');
    const ns = 'someNamespace';
    const attr = new Attr('aName', ownerElement, ns);
    expect(attr.localName).to.equal('aName');
    expect(attr.name).to.equal('aName');
    expect(attr.nodeName).to.equal('aName');
    expect(attr.ownerElement.nodeType).to.equal(1);
    expect(attr.ownerElement.localName).to.equal('abc');
    expect(attr.namespaceURI).to.equal('someNamespace');
  });
  it('should create prefixed namespaced `Attr`', function () {
    const ownerElement = new Element('abc');
    const ns = 'someNamespace';
    const attr = new Attr('aPrefix:aName', ownerElement, ns);
    expect(attr.localName).to.equal('aName');
    expect(attr.name).to.equal('aPrefix:aName');
    expect(attr.nodeName).to.equal('aPrefix:aName');
    expect(attr.prefix).to.equal('aPrefix');
    expect(attr.namespaceURI).to.equal('someNamespace');
    expect(attr.ownerElement.nodeType).to.equal(1);
    expect(attr.ownerElement.localName).to.equal('abc');
  });
  it('should serialize properly', function () {
    const expected = '';
    const attr = new Attr('someName');
    const result = xmlserializer(attr);
    expect(result).to.equal(expected);
  });
});
