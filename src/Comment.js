import CharacterData from './CharacterData.js';

class Comment extends CharacterData {
  constructor (data, parentNode) {
    super(data, parentNode);
    this.nodeName = '#comment'; // Not needed w3c-xmlserializer
  }
}
Comment.prototype.nodeType = 8;

export default Comment;
