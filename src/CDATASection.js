import Text from './Text.js';

class CDATASection extends Text {
  constructor (data, parentNode) {
    super(data, parentNode);
    this.nodeName = '#cdata-section'; // Not needed w3c-xmlserializer
  }
}
CDATASection.prototype.nodeType = 4;

export default CDATASection;
