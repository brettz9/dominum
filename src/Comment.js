import CharacterData from './CharacterData.js';

/**
 * `Comment`
 */
class Comment extends CharacterData {
  /**
   * @param {string} data
   * @param {Node} parentNode
   */
  constructor (data, parentNode) {
    super(data, parentNode);
    this.nodeName = '#comment'; // Not needed w3c-xmlserializer
  }
}
Comment.prototype.nodeType = 8;

export default Comment;
