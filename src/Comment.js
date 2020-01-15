import CharacterData from './CharacterData.js';

class Comment extends CharacterData {
  constructor () {
    super();
    this.nodeName = '#comment'; // Not needed w3c-xmlserializer
  }
}
Comment.prototype.nodeType = 8;

export default Comment;
