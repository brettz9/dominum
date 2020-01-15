import xmlserializer from 'w3c-xmlserializer';
import DocumentFragment from '../src/DocumentFragment.js';

describe('DocumentFragment', function () {
  it('should have `Node` properties', function () {
    const element = new DocumentFragment();
    expect(element.nodeType).to.equal(11);
    expect(element.parentNode).to.equal(null);
  });
  it('should serialize properly', function () {
    const expected = '';
    const element = new DocumentFragment();
    const result = xmlserializer(element);
    expect(result).to.equal(expected);
  });
  it('should have `ParentNode` properties (`append`)', function () {
    const element = new DocumentFragment();
    expect(element.append).to.be.a('function');
    expect(() => {
      const ret = element.append();
      expect(ret).to.be.undefined;
    }).to.not.throw();
  });
});
