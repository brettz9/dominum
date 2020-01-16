import HTMLElement from '../src/HTMLElement.js';
import HTMLDocument from '../src/HTMLDocument.js';

describe('HTMLElement', function () {
  it('should have `Node` properties', function () {
    let element = new HTMLElement('someElement');
    expect(element.nodeType).to.equal(1);
    expect(element.parentNode).to.equal(null);
    const doc = new HTMLDocument();
    element = new HTMLElement('someElement', doc);
    expect(element.ownerDocument.nodeType).to.equal(9);
  });
  it(
    'should have `HTMLElement` properties (`tagName`, `localName`, ' +
    '`content`, `namespaceURI`, `prefix`)',
    function () {
      const element = new HTMLElement('someElement');
      expect(element.tagName).to.equal('SOMEELEMENT');
      expect(element.localName).to.equal('someelement');
      expect(element.namespaceURI).to.equal('http://www.w3.org/1999/xhtml');
      expect(element.prefix).to.equal(null);

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
  it(
    '`HTMLElement` `setAttributeNS` should set "namespaced" attribute',
    function () {
      const element = new HTMLElement('someElement');
      element.setAttributeNS('someNS', 'aPrefix:aName', 'val val');
      expect(element.tagName).to.equal('SOMEELEMENT');
      expect(element.localName).to.equal('someelement');
      expect(element.prefix).to.equal(null);
      expect(element.namespaceURI).to.equal('http://www.w3.org/1999/xhtml');
      expect(element.attributes.length).to.equal(1);
      expect(element.attributes[0].name).to.equal('aPrefix:aName');
      expect(element.attributes[0].value).to.equal('val val');
    }
  );
  it(
    '`HTMLElement` `setAttributeNS` should overwrite "namespaced" attribute',
    function () {
      const element = new HTMLElement('someElement');
      element.setAttributeNS('someNS', 'aPrefix:aName', 'val val');
      element.setAttributeNS('someNS', 'aPrefix:aName', 'new value');
      expect(element.tagName).to.equal('SOMEELEMENT');
      expect(element.localName).to.equal('someelement');
      expect(element.prefix).to.equal(null);
      expect(element.namespaceURI).to.equal('http://www.w3.org/1999/xhtml');
      expect(element.attributes.length).to.equal(1);
      expect(element.attributes[0].name).to.equal('aPrefix:aName');
      expect(element.attributes[0].value).to.equal('new value');
    }
  );
  it(
    '`HTMLElement` `setAttributeNS` should ignore different "namespaced" ' +
    'attribute',
    function () {
      const element = new HTMLElement('someElement');
      element.setAttributeNS('someNS', 'anotherPrefix:aName', 'val val');
      element.setAttributeNS('someNS', 'aPrefix:aName', 'new value');
      expect(element.attributes.length).to.equal(2);
      expect(element.attributes[0].name).to.equal('anotherPrefix:aName');
      expect(element.attributes[0].value).to.equal('val val');
      expect(element.attributes[0].prefix).to.equal(null);
      expect(element.attributes[0].namespaceURI).to.equal(null);
      expect(element.attributes[1].name).to.equal('aPrefix:aName');
      expect(element.attributes[1].value).to.equal('new value');
      expect(element.attributes[1].prefix).to.equal(null);
      expect(element.attributes[1].namespaceURI).to.equal(null);
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
  it(
    '`ChildNode` `remove` should skip removing irrelevant item from container',
    function () {
      const element = new HTMLElement('someElement');
      expect(element.remove).to.be.a('function');
      const childElement = new HTMLElement('aChildElement');
      element.append(childElement);
      expect(element.childNodes.length).to.equal(1);
      expect(element.childNodes[0].localName).to.equal('achildelement');
      expect(element.childNodes[0].nodeName).to.equal('ACHILDELEMENT');

      const anotherChildElement = new HTMLElement('anotherChildElement');
      element.append(anotherChildElement);
      expect(element.childNodes.length).to.equal(2);
      expect(element.childNodes[1].localName).to.equal('anotherchildelement');
      expect(element.childNodes[1].nodeName).to.equal('ANOTHERCHILDELEMENT');

      const ret = anotherChildElement.remove();
      expect(ret).to.be.undefined;
      expect(element.childNodes[0].localName).to.equal('achildelement');
      expect(element.childNodes[0].nodeName).to.equal('ACHILDELEMENT');
      expect(element.childNodes.length).to.equal(1);
      expect(element.childNodes[1]).to.be.undefined;
    }
  );
  it('`ChildNode` `remove` should remove from container', function () {
    const element = new HTMLElement('someElement');
    expect(element.remove).to.be.a('function');
    const childElement = new HTMLElement('aChildElement');
    element.append(childElement);
    expect(element.childNodes.length).to.equal(1);
    expect(element.childNodes[0].localName).to.equal('achildelement');
    expect(element.childNodes[0].nodeName).to.equal('ACHILDELEMENT');

    const anotherChildElement = new HTMLElement('anotherChildElement');
    element.append(anotherChildElement);
    expect(element.childNodes.length).to.equal(2);
    expect(element.childNodes[1].localName).to.equal('anotherchildelement');
    expect(element.childNodes[1].nodeName).to.equal('ANOTHERCHILDELEMENT');

    const ret = childElement.remove();
    expect(ret).to.be.undefined;
    expect(element.childNodes[0].localName).to.equal('anotherchildelement');
    expect(element.childNodes[0].nodeName).to.equal('ANOTHERCHILDELEMENT');
    expect(element.childNodes.length).to.equal(1);
    expect(element.childNodes[1]).to.be.undefined;
  });
});
