/**
 * @license (Unlicense OR MIT)
 * @see https://github.com/inexorabletash/polyfill/blob/master/package.json
 * @author inexorabletash <https://github.com/inexorabletash>, Brett Zamir
 */

/**
 * @param {(Node|string)[]} nodes
 * @returns {Node}
 */
function convertNodesIntoANode (nodes) {
  let node = null;
  nodes = nodes.map(function (node) {
    return node && 'nodeType' in node ? node : document.createTextNode(node);
  });
  if (nodes.length === 1) {
    node = nodes[0];
  } else {
    node = document.createDocumentFragment();
    nodes.forEach(function (n) {
      node.append(n);
    });
  }
  return node;
}

const ChildNode = {
  before (...nodes) {
    const parent = this.parentNode;
    if (!parent) return;
    let viablePreviousSibling = this.previousSibling;
    while (nodes.includes(viablePreviousSibling)) {
      viablePreviousSibling = viablePreviousSibling.previousSibling;
    }
    const node = convertNodesIntoANode(nodes);
    parent.insertBefore(
      node,
      viablePreviousSibling
        ? viablePreviousSibling.nextSibling
        : parent.firstChild
    );
  },
  after (...nodes) {
    const parent = this.parentNode;
    if (!parent) return;
    let viableNextSibling = this.nextSibling;
    while (nodes.includes(viableNextSibling)) {
      viableNextSibling = viableNextSibling.nextSibling;
    }
    const node = convertNodesIntoANode(nodes);
    viableNextSibling.before(node);
  },

  replaceWith (...nodes) {
    const parent = this.parentNode;
    if (!parent) { return; }
    let viableNextSibling = this.nextSibling;
    while (nodes.includes(viableNextSibling)) {
      viableNextSibling = viableNextSibling.nextSibling;
    }
    const node = convertNodesIntoANode(nodes);

    if (this.parentNode === parent) {
      parent.replaceChild(node, this);
    } else {
      viableNextSibling.before(node);
    }
  },

  remove () {
    if (!this.parentNode) {
      return;
    }
    // eslint-disable-next-line unicorn/prefer-node-remove
    this.parentNode.removeChild(this);
  }
};

export default ChildNode;
