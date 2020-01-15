import Text from '../Text.js';

const ParentNode = {
  append (...args) {
    args.forEach((arg) => {
      if (typeof arg === 'string') {
        arg = new Text(arg, this);
      }
      // eslint-disable-next-line unicorn/prefer-node-append
      this.appendChild(arg);
    });
  },

  prepend () {
    // Todo (though not as critical for building)
  }
};

export default ParentNode;
