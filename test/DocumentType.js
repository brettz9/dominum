import xmlserializer from 'w3c-xmlserializer';
import DocumentType from '../src/DocumentType.js';

describe('DocumentType', function () {
  it('should have `Node` properties', function () {
    const doctype = new DocumentType('html');
    expect(doctype.nodeType).to.equal(10);
    expect(doctype.parentNode).to.equal(null);
  });
  it(
    'should have `DocumentType` properties (`name`, `systemId`, `publicId`)',
    function () {
      const doctype = new DocumentType('html');
      expect(doctype.name).to.equal('html');
      expect(doctype.publicId).to.equal('');
      expect(doctype.systemId).to.equal('');

      const doctype2 = new DocumentType('html', 'aPublicID', 'aSystemID');
      expect(doctype2.name).to.equal('html');
      expect(doctype2.publicId).to.equal('aPublicID');
      expect(doctype2.systemId).to.equal('aSystemID');
    }
  );
  it('should serialize properly', function () {
    const expected = '<!DOCTYPE html>';
    const doctype = new DocumentType('html');
    const result = xmlserializer(doctype);
    expect(result).to.equal(expected);

    const expected2 = '<!DOCTYPE html PUBLIC "aPublicID" "aSystemID">';
    const doctype2 = new DocumentType('html', 'aPublicID', 'aSystemID');
    const result2 = xmlserializer(doctype2);
    expect(result2).to.equal(expected2);
  });
  it('should have `ChildNode` properties (`remove`)', function () {
    const doctype = new DocumentType('html');
    expect(doctype.remove).to.be.a('function');
    expect(() => {
      const ret = doctype.remove();
      expect(ret).to.be.undefined;
    }).to.not.throw();
  });
});
