import CharacterData from './CharacterData.js';

class Text extends CharacterData {
  constructor (data, parentNode) {
    super(data, parentNode);
    this.nodeName = '#text'; // Not needed w3c-xmlserializer
  }
}
Text.prototype.nodeType = 3;

export default Text;
