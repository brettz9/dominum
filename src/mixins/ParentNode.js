import Text from '../Text.js';

const ParentNode = {
  append (...args) {
    args.forEach((arg) => {
      if (typeof arg === 'string') {
        arg = new Text(arg, this);
      }
      this.childNodes[this.childNodes.length] = arg;
      arg.parentNode = this;
    });
  },

  prepend () {
    // Todo (though not as critical for building)
  }
};

export default ParentNode;
