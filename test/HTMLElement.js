import xmlserializer from 'w3c-xmlserializer';
import HTMLElement from '../src/HTMLElement.js';

describe('HTMLElement', function () {
  it('should have `Node` properties', function () {
    const element = new HTMLElement('someElement');
    expect(element.nodeType).to.equal(1);
    expect(element.parentNode).to.equal(null);
  });
  it(
    'should have `HTMLElement` properties (`tagName`, `localName`)',
    function () {
      const element = new HTMLElement('someElement');
      expect(element.tagName).to.equal('SOMEELEMENT');
      expect(element.localName).to.equal('someelement');
    }
  );
  it('should serialize properly', function () {
    const expected = '<someelement xmlns="http://www.w3.org/1999/xhtml"></someelement>';
    const element = new HTMLElement('someElement');
    const result = xmlserializer(element);
    expect(result).to.equal(expected);
  });
  it('should have `ChildNode` properties (`remove`)', function () {
    const element = new HTMLElement('someElement');
    expect(element.remove).to.be.a('function');
    expect(() => {
      const ret = element.remove();
      expect(ret).to.be.undefined;
    }).to.not.throw();
  });
});
