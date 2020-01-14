import xmlserializer from 'w3c-xmlserializer';
import Attr from '../src/Attr.js';

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
  it('should serialize properly', function () {
    const expected = '';
    const attr = new Attr('someName');
    const result = xmlserializer(attr);
    expect(result).to.equal(expected);
  });
});
