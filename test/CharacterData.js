import CharacterData from '../src/CharacterData.js';

describe('CharacterData', function () {
  it('should have `Node` properties', function () {
    const chardata = new CharacterData('some data');
    expect(chardata.parentNode).to.equal(null);
  });
  it('should have `CharacterData` properties (`data`)', function () {
    const chardata = new CharacterData('some data');
    expect(chardata.data).to.equal('some data');
  });
  it('should have `ChildNode` properties (`remove`)', function () {
    const chardata = new CharacterData('some data');
    expect(chardata.remove).to.be.a('function');
    expect(() => {
      const ret = chardata.remove();
      expect(ret).to.be.undefined;
    }).to.not.throw();
  });
});
