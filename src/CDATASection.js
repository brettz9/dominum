import Text from './Text.js';

/**
 * `CDATASection`
 */
class CDATASection extends Text {
  /**
   * @param {string} data
   * @param {Node} parentNode
   */
  constructor (data, parentNode) {
    super(data, parentNode);
    this.nodeName = '#cdata-section'; // Not needed w3c-xmlserializer
  }
}
CDATASection.prototype.nodeType = 4;

export default CDATASection;
