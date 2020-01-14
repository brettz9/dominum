import xmlserializer from 'w3c-xmlserializer';
import ProcessingInstruction from '../src/ProcessingInstruction.js';

describe('ProcessingInstruction', function () {
  it('should have `Node` properties', function () {
    const procInst = new ProcessingInstruction('aTarget', 'some data');
    expect(procInst.nodeType).to.equal(7);
    expect(procInst.parentNode).to.equal(null);
  });
  it(
    'should have `ProcessingInstruction` properties (`data`, `target`)',
    function () {
      const procInst = new ProcessingInstruction('aTarget', 'some data');
      expect(procInst.data).to.equal('some data');
      expect(procInst.target).to.equal('aTarget');
    }
  );
  it('should serialize properly', function () {
    const expected = '<?aTarget some data?>';
    const procInst = new ProcessingInstruction('aTarget', 'some data');
    const result = xmlserializer(procInst);
    expect(result).to.equal(expected);
  });
});
