import Node from './Node.js';

import ChildNode from './mixins/ChildNode.js';

class CharacterData extends Node {
  constructor (data, parentNode) {
    super();
    this.data = data;
    this.parentNode = parentNode || null;
    Object.assign(this, ChildNode);
  }
}

export default CharacterData;
