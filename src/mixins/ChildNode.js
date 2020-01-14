const ChildNode = {
  remove () {
    // eslint-disable-next-line unicorn/prefer-node-remove
    return this.parentNode.removeChild(this);
  }
};

export default ChildNode;
