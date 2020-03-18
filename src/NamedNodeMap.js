// Todo: Add `setNamedItem`, `getNamedItem`, `removeNamedItem` way
//   to populate, retrieve, and remove (and *NS methods)

import {arrayExoticObject, setWritingPermission} from
  './utils/arrayExoticObject.js';

/**
 * This class is "live", meaning its `length` is dynamic
 * as items are added to the list.
 */
class NamedNodeMap {
  /**
   * Sets up as exotic array object.
   */
  constructor () {
    // eslint-disable-next-line no-constructor-return
    return arrayExoticObject(this, false);
  }
}

export {setWritingPermission};
export default NamedNodeMap;
