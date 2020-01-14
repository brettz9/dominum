const ChildNode = {
  remove () {
    if (!this.parentNode) {
      return;
    }
    // eslint-disable-next-line unicorn/prefer-node-remove
    this.parentNode.removeChild(this);
  }
};

export default ChildNode;
