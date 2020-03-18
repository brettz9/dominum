import CharacterData from './CharacterData.js';

/**
 * `Text`
 */
class Text extends CharacterData {
  /**
   * @param {string} data
   * @param {Node} parentNode
   */
  constructor (data, parentNode) {
    super(data, parentNode);
    this.nodeName = '#text'; // Not needed w3c-xmlserializer
  }
}
Text.prototype.nodeType = 3;

export default Text;
