import Text from '../Text.js';

import {setWritingPermission} from '../NodeList.js';

const ParentNode = {
  append (...args) {
    args.forEach((arg) => {
      if (typeof arg === 'string') {
        arg = new Text(arg, this);
      }
      setWritingPermission(true);
      this.childNodes[this.childNodes.length] = arg;
      setWritingPermission(false);
      arg.parentNode = this;
    });
  },

  prepend () {
    // Todo (though not as critical for building)
  }
};

export default ParentNode;
