import Text from '../Text.js';

const ParentNode = {
  append (...args) {
    args.forEach((arg) => {
      if (typeof arg === 'string') {
        arg = new Text(arg, this);
      }
      // Todo: Make this into a `NodeList` (but with a way in to populate)
      this.childNodes.push(arg);
      arg.parentNode = this;
    });
  },

  prepend () {
    // Todo (though not as critical for building)
  }
};

export default ParentNode;
