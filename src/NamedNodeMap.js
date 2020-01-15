// Todo (high): Add (standard?) way to populate and retrieve (and remove
//   `_namedNodeMapArrayImpl` as export?)

/**
 * This class is "live", meaning its `length` is dynamic
 * as items are added to the list.
 */
class NamedNodeMap {
  constructor () {
    this.length = 0;
  }
}

export default NamedNodeMap;
