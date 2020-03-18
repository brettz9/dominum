/* eslint-disable unicorn/custom-error-definition */
/**
 * `DOMException`
 */
class DOMException extends Error {
  /* eslint-enable unicorn/custom-error-definition */
  /**
   * @param {string} message
   * @param {string} name
   */
  constructor (message, name) {
    super(message);
    // eslint-disable-next-line unicorn/custom-error-definition
    this.name = name;
  }
}

export default DOMException;
