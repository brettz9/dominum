import HTMLElement from '../src/HTMLElement.js';
import HTMLDocument from '../src/HTMLDocument.js';

describe('HTMLElement', function () {
  it('should have `Node` properties', function () {
    const element = new HTMLElement('someElement');
    expect(element.nodeType).to.equal(1);
    expect(element.parentNode).to.equal(null);
  });
  it(
    'should have `HTMLElement` properties (`tagName`, `localName`, `content`)',
    function () {
      const element = new HTMLElement('someElement');
      expect(element.tagName).to.equal('SOMEELEMENT');
      expect(element.localName).to.equal('someelement');

      let template = new HTMLElement('template');
      expect(template.tagName).to.equal('TEMPLATE');
      expect(template.localName).to.equal('template');
      expect(template).to.have.property('content');
      expect(template.content.nodeType).to.equal(11);

      const doc = new HTMLDocument();
      template = new HTMLElement('template', doc);
      expect(template.tagName).to.equal('TEMPLATE');
      expect(template.localName).to.equal('template');
      expect(template).to.have.property('content');
      expect(template.content.nodeType).to.equal(11);
    }
  );
  it('should serialize properly', function () {
    const expected = '<someelement xmlns="http://www.w3.org/1999/xhtml"></someelement>';
    const element = new HTMLElement('someElement');
    const result = xmlserializer(element);
    expect(result).to.equal(expected);
  });
  it('`ChildNode` `remove` should not throw', function () {
    const element = new HTMLElement('someElement');
    expect(element.remove).to.be.a('function');
    expect(() => {
      const ret = element.remove();
      expect(ret).to.be.undefined;
    }).to.not.throw();
  });
  it('`ChildNode` `remove` should remove from container', function () {
    const element = new HTMLElement('someElement');
    expect(element.remove).to.be.a('function');
    const childElement = new HTMLElement('aChildElement');
    element.append(childElement);
    expect(element.childNodes.length).to.equal(1);
    expect(element.childNodes[0].localName).to.equal('achildelement');
    expect(element.childNodes[0].nodeName).to.equal('ACHILDELEMENT');
    const ret = childElement.remove();
    expect(ret).to.be.undefined;
    expect(element.childNodes.length).to.equal(0);
    expect(element.childNodes[0]).to.be.undefined;
  });
});
