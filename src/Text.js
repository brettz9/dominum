import CharacterData from './CharacterData.js';

class Text extends CharacterData {
  constructor () {
    super();
    this.nodeName = '#text'; // Not needed w3c-xmlserializer
  }
}
Text.prototype.nodeType = 3;

export default Text;
