import xmlserializer from 'w3c-xmlserializer';
import Text from '../src/Text.js';

describe('Text', function () {
  it('should have `Node` properties', function () {
    const text = new Text('some data');
    expect(text.nodeType).to.equal(3);
    expect(text.parentNode).to.equal(null);
  });
  it('should have `Text` properties (`data`)', function () {
    const text = new Text('some data');
    expect(text.data).to.equal('some data');
  });
  it('should serialize properly', function () {
    const expected = 'some data';
    const text = new Text('some data');
    const result = xmlserializer(text);
    expect(result).to.equal(expected);
  });
  it('should have `ChildNode` properties (`remove`)', function () {
    const text = new Text('some data');
    expect(text.remove).to.be.a('function');
    expect(() => {
      const ret = text.remove();
      expect(ret).to.be.undefined;
    }).to.not.throw();
  });
});
