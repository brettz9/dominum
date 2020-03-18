import Node from './Node.js';

import ChildNode from './mixins/ChildNode.js';

/**
 * `CharacterData`
 */
class CharacterData extends Node {
  /**
   * @param {string} data
   * @param {Node} parentNode
   */
  constructor (data, parentNode) {
    super();
    this.data = data;
    this.parentNode = parentNode || null;
    Object.assign(this, ChildNode);
  }
}

export default CharacterData;
