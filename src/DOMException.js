// eslint-disable-next-line unicorn/custom-error-definition
class DOMException extends Error {
  constructor (message, name) {
    super(message);
    // eslint-disable-next-line unicorn/custom-error-definition
    this.name = name;
  }
}

export default DOMException;
