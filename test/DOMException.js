import DOMException from '../src/DOMException.js';

describe('DOMException', function () {
  it('should have `Error` properties (`message`)', function () {
    const element = new DOMException('a message', 'aName');
    expect(element.message).to.equal('a message');
  });
  it('should have `DOMException` properties (`name`)', function () {
    const element = new DOMException('a message', 'aName');
    expect(element.name).to.equal('aName');
  });
});
