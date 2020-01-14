import Text from './Text.js';

class CDATASection extends Text {}
CDATASection.prototype.nodeType = 4;

export default CDATASection;
