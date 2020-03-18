import Node from './Node.js';

/**
 * `ProcessingInstruction`
 */
class ProcessingInstruction extends Node {
  /**
   * @param {string} target
   * @param {string} data
   */
  constructor (target, data) {
    super();
    this.target = target;
    this.data = data;
    this.nodeName = target; // Not needed w3c-xmlserializer
  }
}
ProcessingInstruction.prototype.nodeType = 7;

export default ProcessingInstruction;
