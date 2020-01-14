import CharacterData from './CharacterData.js';

class Comment extends CharacterData {}
Comment.prototype.nodeType = 8;

export default Comment;
