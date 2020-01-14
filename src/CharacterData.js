import Node from './Node.js';

import ChildNode from './mixins/ChildNode.js';

class CharacterData extends Node {
  constructor (data) {
    super();
    this.data = data;
    Object.assign(this, ChildNode);
  }
}

export default CharacterData;
