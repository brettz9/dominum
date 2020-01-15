import {arrayExoticObject, setWritingPermission} from
  './utils/arrayExoticObject.js';

/**
 * This class is of the "live" `NodeList` variety (unlike say the `NodeList`
 * given by `document.querySelectorAll`), meaning its `length` is dynamic
 * as items are added to the list.
 */
class NodeList {
  constructor () {
    // eslint-disable-next-line no-constructor-return
    return arrayExoticObject(this, false);
  }
}

export {setWritingPermission};
export default NodeList;
