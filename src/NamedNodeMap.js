// Todo (high): Add (standard?) way to populate and retrieve

import {arrayExoticObject} from
  './utils/arrayExoticObject.js';

/**
 * This class is "live", meaning its `length` is dynamic
 * as items are added to the list.
 */
class NamedNodeMap {
  constructor () {
    // eslint-disable-next-line no-constructor-return
    return arrayExoticObject(this, true);
  }
}

export default NamedNodeMap;
