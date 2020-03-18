var generatedParser = (function(){function _waka(parser, startRule) {
  if(startRule && ! parser.rules[startRule])
    throw new Error('start rule missing: ' + JSON.stringify(startRule))

  return {
    getState: function() {
      return parser.state
    },

    getTrace: function(message) {
      return (message ? message + '\n' : '') + parser.state.traceLine()
    },

    exec: function(input) {
      if(! startRule)
        throw new Error('no start rule given')

      parser.state.setInput(input);

      try {
        var value = parser.rules[startRule]();
      }
      catch(err) {
        var error = err;
      }

      if(error == null) {
        if(! parser.state.adv || ! parser.state.isEOF())
          var error = new Error('Unexpected syntax in top');
      }

      return {
        success: error == null,
        value: ! error ? value : undefined,
        error: error
      }
    },

    startWith: function(rule) {
      return _waka(parser, rule)
    },
  }
}return _waka((function(){var _rules={};
_rules.NameStartChar = function() {
var _R=_P.match(":");
if(!_P.adv){ _P.adv=true;
var $0=_P.cur();
if($0==null){_P.adv=false;
var _R=null;
}else {
var _R=_P.step("A"<=$0&&$0<="Z");
}
}
if(!_P.adv){ _P.adv=true;
var _R=_P.match("_");
}
if(!_P.adv){ _P.adv=true;
var $1=_P.cur();
if($1==null){_P.adv=false;
var _R=null;
}else {
var _R=_P.step("a"<=$1&&$1<="z");
}
}
if(!_P.adv){ _P.adv=true;
var $2=_P.cur();
if($2==null){_P.adv=false;
var _R=null;
}else {
var _R=_P.step("\u00C0"<=$2&&$2<="\u00D6");
}
}
if(!_P.adv){ _P.adv=true;
var $3=_P.cur();
if($3==null){_P.adv=false;
var _R=null;
}else {
var _R=_P.step("\u00D8"<=$3&&$3<="\u00F6");
}
}
if(!_P.adv){ _P.adv=true;
var $4=_P.cur();
if($4==null){_P.adv=false;
var _R=null;
}else {
var _R=_P.step("\u00F8"<=$4&&$4<="\u02FF");
}
}
if(!_P.adv){ _P.adv=true;
var $5=_P.cur();
if($5==null){_P.adv=false;
var _R=null;
}else {
var _R=_P.step("\u0370"<=$5&&$5<="\u037D");
}
}
if(!_P.adv){ _P.adv=true;
var $6=_P.cur();
if($6==null){_P.adv=false;
var _R=null;
}else {
var _R=_P.step("\u037F"<=$6&&$6<="\u1FFF");
}
}
if(!_P.adv){ _P.adv=true;
var $7=_P.cur();
if($7==null){_P.adv=false;
var _R=null;
}else {
var _R=_P.step("\u200C"<=$7&&$7<="\u200D");
}
}
if(!_P.adv){ _P.adv=true;
var $8=_P.cur();
if($8==null){_P.adv=false;
var _R=null;
}else {
var _R=_P.step("\u2070"<=$8&&$8<="\u218F");
}
}
if(!_P.adv){ _P.adv=true;
var $9=_P.cur();
if($9==null){_P.adv=false;
var _R=null;
}else {
var _R=_P.step("\u2C00"<=$9&&$9<="\u2FEF");
}
}
if(!_P.adv){ _P.adv=true;
var $a=_P.cur();
if($a==null){_P.adv=false;
var _R=null;
}else {
var _R=_P.step("\u3001"<=$a&&$a<="\uD7FF");
}
}
if(!_P.adv){ _P.adv=true;
var $b=_P.cur();
if($b==null){_P.adv=false;
var _R=null;
}else {
var _R=_P.step("\uF900"<=$b&&$b<="\uFDCF");
}
}
if(!_P.adv){ _P.adv=true;
var $c=_P.cur();
if($c==null){_P.adv=false;
var _R=null;
}else {
var _R=_P.step("\uFDF0"<=$c&&$c<="\uFFFD");
}
}
if(!_P.adv){ _P.adv=true;
$d:{var $e=_P.pos;
var $f=_P.cur();
if($f==null){_P.adv=false;
}else {
_P.step("\uD800"<=$f&&$f<="\uDB7F");
}
if(!_P.adv) break $d;
var $g=_P.cur();
if($g==null){_P.adv=false;
}else {
_P.step("\uDC00"<=$g&&$g<="\uDFFF");
}
var _R=_P.doc.substring($e,_P.pos);
}
if(!_P.adv) _P.pos=$e;
}
return _R;
};
_rules.NameChar = function() {
var _R=_rules.NameStartChar();
if(!_P.adv){ _P.adv=true;
var _R=_P.match("-");
}
if(!_P.adv){ _P.adv=true;
var _R=_P.match(".");
}
if(!_P.adv){ _P.adv=true;
var $0=_P.cur();
if($0==null){_P.adv=false;
var _R=null;
}else {
var _R=_P.step("0"<=$0&&$0<="9");
}
}
if(!_P.adv){ _P.adv=true;
var _R=_P.match("\u00B7");
}
if(!_P.adv){ _P.adv=true;
var $1=_P.cur();
if($1==null){_P.adv=false;
var _R=null;
}else {
var _R=_P.step("\u0300"<=$1&&$1<="\u036F");
}
}
if(!_P.adv){ _P.adv=true;
var $2=_P.cur();
if($2==null){_P.adv=false;
var _R=null;
}else {
var _R=_P.step("\u203F"<=$2&&$2<="\u2040");
}
}
return _R;
};
_rules.Name = function() {
$0:{var $1=_P.pos;
_rules.NameStartChar();
if(!_P.adv) break $0;
for(;;) {
_rules.NameChar();
if(!_P.adv) break;
} _P.adv=true;
var _R=_P.doc.substring($1,_P.pos);
}
if(!_P.adv) _P.pos=$1;
return _R;
};
_rules.QName = function() {
var _R=_rules.PrefixedName();
if(!_P.adv){ _P.adv=true;
var _R=_rules.UnprefixedName();
}
return _R;
};
_rules.PrefixedName = function() {
$0:{var $1=_P.pos;
_rules.Prefix();
if(!_P.adv) break $0;
_P.match(":");
if(!_P.adv) break $0;
_rules.LocalPart();
var _R=_P.doc.substring($1,_P.pos);
}
if(!_P.adv) _P.pos=$1;
return _R;
};
_rules.UnprefixedName = function() {
var _R=_rules.LocalPart();
return _R;
};
_rules.Prefix = function() {
var _R=_rules.NCName();
return _R;
};
_rules.LocalPart = function() {
var _R=_rules.NCName();
return _R;
};
_rules.NCNameStartChar = function() {
var $0=_P.cur();
if($0==null){_P.adv=false;
var _R=null;
}else {
var _R=_P.step("A"<=$0&&$0<="Z");
}
if(!_P.adv){ _P.adv=true;
var _R=_P.match("_");
}
if(!_P.adv){ _P.adv=true;
var $1=_P.cur();
if($1==null){_P.adv=false;
var _R=null;
}else {
var _R=_P.step("a"<=$1&&$1<="z");
}
}
if(!_P.adv){ _P.adv=true;
var $2=_P.cur();
if($2==null){_P.adv=false;
var _R=null;
}else {
var _R=_P.step("\u00C0"<=$2&&$2<="\u00D6");
}
}
if(!_P.adv){ _P.adv=true;
var $3=_P.cur();
if($3==null){_P.adv=false;
var _R=null;
}else {
var _R=_P.step("\u00D8"<=$3&&$3<="\u00F6");
}
}
if(!_P.adv){ _P.adv=true;
var $4=_P.cur();
if($4==null){_P.adv=false;
var _R=null;
}else {
var _R=_P.step("\u00F8"<=$4&&$4<="\u02FF");
}
}
if(!_P.adv){ _P.adv=true;
var $5=_P.cur();
if($5==null){_P.adv=false;
var _R=null;
}else {
var _R=_P.step("\u0370"<=$5&&$5<="\u037D");
}
}
if(!_P.adv){ _P.adv=true;
var $6=_P.cur();
if($6==null){_P.adv=false;
var _R=null;
}else {
var _R=_P.step("\u037F"<=$6&&$6<="\u1FFF");
}
}
if(!_P.adv){ _P.adv=true;
var $7=_P.cur();
if($7==null){_P.adv=false;
var _R=null;
}else {
var _R=_P.step("\u200C"<=$7&&$7<="\u200D");
}
}
if(!_P.adv){ _P.adv=true;
var $8=_P.cur();
if($8==null){_P.adv=false;
var _R=null;
}else {
var _R=_P.step("\u2070"<=$8&&$8<="\u218F");
}
}
if(!_P.adv){ _P.adv=true;
var $9=_P.cur();
if($9==null){_P.adv=false;
var _R=null;
}else {
var _R=_P.step("\u2C00"<=$9&&$9<="\u2FEF");
}
}
if(!_P.adv){ _P.adv=true;
var $a=_P.cur();
if($a==null){_P.adv=false;
var _R=null;
}else {
var _R=_P.step("\u3001"<=$a&&$a<="\uD7FF");
}
}
if(!_P.adv){ _P.adv=true;
var $b=_P.cur();
if($b==null){_P.adv=false;
var _R=null;
}else {
var _R=_P.step("\uF900"<=$b&&$b<="\uFDCF");
}
}
if(!_P.adv){ _P.adv=true;
var $c=_P.cur();
if($c==null){_P.adv=false;
var _R=null;
}else {
var _R=_P.step("\uFDF0"<=$c&&$c<="\uFFFD");
}
}
if(!_P.adv){ _P.adv=true;
$d:{var $e=_P.pos;
var $f=_P.cur();
if($f==null){_P.adv=false;
}else {
_P.step("\uD800"<=$f&&$f<="\uDB7F");
}
if(!_P.adv) break $d;
var $g=_P.cur();
if($g==null){_P.adv=false;
}else {
_P.step("\uDC00"<=$g&&$g<="\uDFFF");
}
var _R=_P.doc.substring($e,_P.pos);
}
if(!_P.adv) _P.pos=$e;
}
return _R;
};
_rules.NCNameChar = function() {
var _R=_rules.NCNameStartChar();
if(!_P.adv){ _P.adv=true;
var _R=_P.match("-");
}
if(!_P.adv){ _P.adv=true;
var _R=_P.match(".");
}
if(!_P.adv){ _P.adv=true;
var $0=_P.cur();
if($0==null){_P.adv=false;
var _R=null;
}else {
var _R=_P.step("0"<=$0&&$0<="9");
}
}
if(!_P.adv){ _P.adv=true;
var _R=_P.match("\u00B7");
}
if(!_P.adv){ _P.adv=true;
var $1=_P.cur();
if($1==null){_P.adv=false;
var _R=null;
}else {
var _R=_P.step("\u0300"<=$1&&$1<="\u036F");
}
}
if(!_P.adv){ _P.adv=true;
var $2=_P.cur();
if($2==null){_P.adv=false;
var _R=null;
}else {
var _R=_P.step("\u203F"<=$2&&$2<="\u2040");
}
}
return _R;
};
_rules.NCName = function() {
$0:{var $1=_P.pos;
_rules.NCNameStartChar();
if(!_P.adv) break $0;
for(;;) {
_rules.NCNameChar();
if(!_P.adv) break;
} _P.adv=true;
var _R=_P.doc.substring($1,_P.pos);
}
if(!_P.adv) _P.pos=$1;
return _R;
};
function ParserState() {
  this.doc = '';
  this.pos = 0;
  this.adv = true;

  this.setInput = function(doc) {
    this.doc = doc;
    this.pos = 0;
    this.adv = true;
  };

  this.isEOF = function() {
    return this.pos == this.doc.length
  };

  this.cur = function() {
    return _P.doc[_P.pos]
  };

  this.match = function(str) {
    if(_P.adv = _P.doc.substr(_P.pos, str.length) == str) {
      _P.pos += str.length;
      return str
    }
  };

  this.step = function(flag) {
    if(_P.adv = flag) {
      _P.pos++;
      return _P.doc[_P.pos - 1]
    }
  };

  this.unexpected = function(rule) {
    throw new Error('Unexpected syntax in ' + rule)
  };

  this.traceLine = function(pos) {
    if(! pos) pos = _P.pos;

    var from = _P.doc.lastIndexOf('\n', pos), to = _P.doc.indexOf('\n', pos);
    
    if(from == -1)
      from = 0;
    else
      from++;
    
    if(to == -1)
      to = pos.length;

    var lineNo = _P.doc.substring(0, from).split('\n').length;
    var line = _P.doc.substring(from, to);
    var pointer = Array(200).join(' ').substr(0, pos - from) + '^^^';

    return (
      'Line ' + lineNo + ':\n' +
      line + '\n' +
      pointer
    )
  };
}
var _P = new ParserState;
return {
  state: _P,
  rules: _rules,
}
})(),null)})();

var name = function (potentialName) {
    return mapResult(generatedParser.startWith("Name").exec(potentialName));
};

var qname = function (potentialQname) {
    return mapResult(generatedParser.startWith("QName").exec(potentialQname));
};

function mapResult(result) {
    return {
        success: result.success,
        error: result.error && generatedParser.getTrace(result.error.message)
    };
}

var xmlNameValidator = {
	name: name,
	qname: qname
};

var NAMESPACES = {
  HTML: "http://www.w3.org/1999/xhtml",
  XML: "http://www.w3.org/XML/1998/namespace",
  XMLNS: "http://www.w3.org/2000/xmlns/"
};

var NODE_TYPES = {
  ELEMENT_NODE: 1,
  ATTRIBUTE_NODE: 2, // historical
  TEXT_NODE: 3,
  CDATA_SECTION_NODE: 4,
  ENTITY_REFERENCE_NODE: 5, // historical
  ENTITY_NODE: 6, // historical
  PROCESSING_INSTRUCTION_NODE: 7,
  COMMENT_NODE: 8,
  DOCUMENT_NODE: 9,
  DOCUMENT_TYPE_NODE: 10,
  DOCUMENT_FRAGMENT_NODE: 11,
  NOTATION_NODE: 12 // historical
};

var VOID_ELEMENTS = new Set([
  "area",
  "base",
  "basefont",
  "bgsound",
  "br",
  "col",
  "embed",
  "frame",
  "hr",
  "img",
  "input",
  "keygen",
  "link",
  "menuitem",
  "meta",
  "param",
  "source",
  "track",
  "wbr"
]);

var constants = {
	NAMESPACES: NAMESPACES,
	NODE_TYPES: NODE_TYPES,
	VOID_ELEMENTS: VOID_ELEMENTS
};

const { NAMESPACES: NAMESPACES$1 } = constants;

function generatePrefix(map, newNamespace, prefixIndex) {
  const generatedPrefix = "ns" + prefixIndex;
  map[newNamespace] = [generatedPrefix];
  return generatedPrefix;
}

function preferredPrefixString(map, ns, preferredPrefix) {
  const candidateList = map[ns];
  if (!candidateList) {
    return null;
  }
  if (candidateList.includes(preferredPrefix)) {
    return preferredPrefix;
  }
  return candidateList[candidateList.length - 1];
}

function serializeAttributeValue(value/* , requireWellFormed*/) {
  if (value === null) {
    return "";
  }
  // TODO: Check well-formedness
  return value
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\t/g, "&#x9;")
    .replace(/\n/g, "&#xA;")
    .replace(/\r/g, "&#xD;");
}

function serializeAttributes(
  element,
  map,
  localPrefixes,
  ignoreNamespaceDefAttr,
  requireWellFormed,
  refs
) {
  let result = "";
  const namespaceLocalnames = Object.create(null);
  for (const attr of element.attributes) {
    if (
      requireWellFormed &&
      namespaceLocalnames[attr.namespaceURI] &&
      namespaceLocalnames[attr.namespaceURI].has(attr.localName)
    ) {
      throw new Error("Found duplicated attribute");
    }
    if (!namespaceLocalnames[attr.namespaceURI]) {
      namespaceLocalnames[attr.namespaceURI] = new Set();
    }
    namespaceLocalnames[attr.namespaceURI].add(attr.localName);
    const attributeNamespace = attr.namespaceURI;
    let candidatePrefix = null;
    if (attributeNamespace !== null) {
      candidatePrefix = preferredPrefixString(
        map,
        attributeNamespace,
        attr.prefix
      );
      if (attributeNamespace === NAMESPACES$1.XMLNS) {
        if (
          attr.value === NAMESPACES$1.XML ||
          (attr.prefix === null && ignoreNamespaceDefAttr) ||
          (attr.prefix !== null &&
            localPrefixes[attr.localName] !== attr.value &&
            map[attr.value].includes(attr.localName))
        ) {
          continue;
        }
        if (requireWellFormed && attr.value === NAMESPACES$1.XMLNS) {
          throw new Error(
            "The XMLNS namespace is reserved and cannot be applied as an element's namespace via XML parsing"
          );
        }
        if (requireWellFormed && attr.value === "") {
          throw new Error(
            "Namespace prefix declarations cannot be used to undeclare a namespace"
          );
        }
        if (attr.prefix === "xmlns") {
          candidatePrefix = "xmlns";
        }
      } else if (candidatePrefix === null) {
        candidatePrefix = generatePrefix(
          map,
          attributeNamespace,
          refs.prefixIndex++
        );
        result += ` xmlns:${candidatePrefix}="${serializeAttributeValue(
          attributeNamespace)}"`;
      }
    }

    result += " ";
    if (candidatePrefix !== null) {
      result += candidatePrefix + ":";
    }
    if (
      requireWellFormed &&
      (attr.localName.includes(":") ||
        !xmlNameValidator.name(attr.localName) ||
        (attr.localName === "xmlns" && attributeNamespace === null))
    ) {
      throw new Error("Invalid attribute localName value");
    }
    result += `${attr.localName}="${serializeAttributeValue(
      attr.value)}"`;
  }
  return result;
}

var preferredPrefixString_1 = preferredPrefixString;
var generatePrefix_1 = generatePrefix;
var serializeAttributeValue_1 = serializeAttributeValue;
var serializeAttributes_1 = serializeAttributes;

var attributes = {
	preferredPrefixString: preferredPrefixString_1,
	generatePrefix: generatePrefix_1,
	serializeAttributeValue: serializeAttributeValue_1,
	serializeAttributes: serializeAttributes_1
};

const { NAMESPACES: NAMESPACES$2, VOID_ELEMENTS: VOID_ELEMENTS$1, NODE_TYPES: NODE_TYPES$1 } = constants;

const XML_CHAR = /^(\x09|\x0A|\x0D|[\x20-\uD7FF]|[\uE000-\uFFFD]|(?:[\uD800-\uDBFF][\uDC00-\uDFFF]))*$/;
const PUBID_CHAR = /^(\x20|\x0D|\x0A|[a-zA-Z0-9]|[-'()+,./:=?;!*#@$_%])*$/;

function asciiCaseInsensitiveMatch(a, b) {
  if (a.length !== b.length) {
    return false;
  }

  for (let i = 0; i < a.length; ++i) {
    if ((a.charCodeAt(i) | 32) !== (b.charCodeAt(i) | 32)) {
      return false;
    }
  }

  return true;
}

function recordNamespaceInformation(element, map, prefixMap) {
  let defaultNamespaceAttrValue = null;
  for (let i = 0; i < element.attributes.length; ++i) {
    const attr = element.attributes[i];
    if (attr.namespaceURI === NAMESPACES$2.XMLNS) {
      if (attr.prefix === null) {
        defaultNamespaceAttrValue = attr.value;
        continue;
      }
      let namespaceDefinition = attr.value;
      if (namespaceDefinition === NAMESPACES$2.XML) {
        continue;
      }
      // This is exactly the other way than the spec says, but that's intended.
      // All the maps coalesce null to the empty string (explained in the
      // spec), so instead of doing that every time, just do it once here.
      if (namespaceDefinition === null) {
        namespaceDefinition = "";
      }

      if (
        namespaceDefinition in map &&
        map[namespaceDefinition].includes(attr.localName)
      ) {
        continue;
      }
      if (!(namespaceDefinition in map)) {
        map[namespaceDefinition] = [];
      }
      map[namespaceDefinition].push(attr.localName);
      prefixMap[attr.localName] = namespaceDefinition;
    }
  }
  return defaultNamespaceAttrValue;
}

function serializeDocumentType(node, namespace, prefixMap, requireWellFormed) {
  if (requireWellFormed && !PUBID_CHAR.test(node.publicId)) {
    throw new Error("Failed to serialize XML: document type node publicId is not well-formed.");
  }

  if (
    requireWellFormed &&
    (!XML_CHAR.test(node.systemId) ||
      (node.systemId.includes('"') && node.systemId.includes("'")))
  ) {
    throw new Error("Failed to serialize XML: document type node systemId is not well-formed.");
  }

  let markup = `<!DOCTYPE ${node.name}`;
  if (node.publicId !== "") {
    markup += ` PUBLIC "${node.publicId}"`;
  } else if (node.systemId !== "") {
    markup += " SYSTEM";
  }
  if (node.systemId !== "") {
    markup += ` "${node.systemId}"`;
  }
  return markup + ">";
}

function serializeProcessingInstruction(
  node,
  namespace,
  prefixMap,
  requireWellFormed
) {
  if (
    requireWellFormed &&
    (node.target.includes(":") || asciiCaseInsensitiveMatch(node.target, "xml"))
  ) {
    throw new Error("Failed to serialize XML: processing instruction node target is not well-formed.");
  }
  if (
    requireWellFormed &&
    (!XML_CHAR.test(node.data) || node.data.includes("?>"))
  ) {
    throw new Error("Failed to serialize XML: processing instruction node data is not well-formed.");
  }
  return `<?${node.target} ${node.data}?>`;
}

function serializeDocument(
  node,
  namespace,
  prefixMap,
  requireWellFormed,
  refs
) {
  if (requireWellFormed && node.documentElement === null) {
    throw new Error("Failed to serialize XML: document does not have a document element.");
  }
  let serializedDocument = "";
  for (const child of node.childNodes) {
    serializedDocument += xmlSerialization(
      child,
      namespace,
      prefixMap,
      requireWellFormed,
      refs
    );
  }
  return serializedDocument;
}

function serializeDocumentFragment(
  node,
  namespace,
  prefixMap,
  requireWellFormed,
  refs
) {
  let markup = "";
  for (const child of node.childNodes) {
    markup += xmlSerialization(
      child,
      namespace,
      prefixMap,
      requireWellFormed,
      refs
    );
  }
  return markup;
}

function serializeText(node, namespace, prefixMap, requireWellFormed) {
  if (requireWellFormed && !XML_CHAR.test(node.data)) {
    throw new Error("Failed to serialize XML: text node data is not well-formed.");
  }

  return node.data
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function serializeComment(node, namespace, prefixMap, requireWellFormed) {
  if (requireWellFormed && !XML_CHAR.test(node.data)) {
    throw new Error("Failed to serialize XML: comment node data is not well-formed.");
  }

  if (
    requireWellFormed &&
    (node.data.includes("--") || node.data.endsWith("-"))
  ) {
    throw new Error("Failed to serialize XML: found hyphens in illegal places in comment node data.");
  }
  return `<!--${node.data}-->`;
}

function serializeElement(node, namespace, prefixMap, requireWellFormed, refs) {
  if (
    requireWellFormed &&
    (node.localName.includes(":") || !xmlNameValidator.name(node.localName))
  ) {
    throw new Error("Failed to serialize XML: element node localName is not a valid XML name.");
  }
  let markup = "<";
  let qualifiedName = "";
  let skipEndTag = false;
  let ignoreNamespaceDefinitionAttr = false;
  const map = Object.assign({}, prefixMap);
  const localPrefixesMap = Object.create(null);
  const localDefaultNamespace = recordNamespaceInformation(
    node,
    map,
    localPrefixesMap
  );
  let inheritedNs = namespace;
  const ns = node.namespaceURI;
  if (inheritedNs === ns) {
    if (localDefaultNamespace !== null) {
      ignoreNamespaceDefinitionAttr = true;
    }
    if (ns === NAMESPACES$2.XML) {
      qualifiedName = "xml:" + node.localName;
    } else {
      qualifiedName = node.localName;
    }
    markup += qualifiedName;
  } else {
    let { prefix } = node;
    let candidatePrefix = attributes.preferredPrefixString(map, ns, prefix);
    if (prefix === "xmlns") {
      if (requireWellFormed) {
        throw new Error("Failed to serialize XML: element nodes can't have a prefix of \"xmlns\".");
      }
      candidatePrefix = "xmlns";
    }
    if (candidatePrefix !== null) {
      qualifiedName = candidatePrefix + ":" + node.localName;
      if (
        localDefaultNamespace !== null &&
        localDefaultNamespace !== NAMESPACES$2.XML
      ) {
        inheritedNs =
          localDefaultNamespace === "" ? null : localDefaultNamespace;
      }
      markup += qualifiedName;
    } else if (prefix !== null) {
      if (prefix in localPrefixesMap) {
        prefix = attributes.generatePrefix(map, ns, refs.prefixIndex++);
      }
      if (map[ns]) {
        map[ns].push(prefix);
      } else {
        map[ns] = [prefix];
      }
      qualifiedName = prefix + ":" + node.localName;
      markup += `${qualifiedName} xmlns:${prefix}="${attributes.serializeAttributeValue(
        ns,
        requireWellFormed
      )}"`;
      if (localDefaultNamespace !== null) {
        inheritedNs =
          localDefaultNamespace === "" ? null : localDefaultNamespace;
      }
    } else if (localDefaultNamespace === null || localDefaultNamespace !== ns) {
      ignoreNamespaceDefinitionAttr = true;
      qualifiedName = node.localName;
      inheritedNs = ns;
      markup += `${qualifiedName} xmlns="${attributes.serializeAttributeValue(
        ns,
        requireWellFormed
      )}"`;
    } else {
      qualifiedName = node.localName;
      inheritedNs = ns;
      markup += qualifiedName;
    }
  }

  markup += attributes.serializeAttributes(
    node,
    map,
    localPrefixesMap,
    ignoreNamespaceDefinitionAttr,
    requireWellFormed,
    refs
  );

  if (
    ns === NAMESPACES$2.HTML &&
    node.childNodes.length === 0 &&
    VOID_ELEMENTS$1.has(node.localName)
  ) {
    markup += " /";
    skipEndTag = true;
  } else if (ns !== NAMESPACES$2.HTML && node.childNodes.length === 0) {
    markup += "/";
    skipEndTag = true;
  }
  markup += ">";
  if (skipEndTag) {
    return markup;
  }

  if (ns === NAMESPACES$2.HTML && node.localName === "template") {
    markup += xmlSerialization(
      node.content,
      inheritedNs,
      map,
      requireWellFormed,
      refs
    );
  } else {
    for (const child of node.childNodes) {
      markup += xmlSerialization(
        child,
        inheritedNs,
        map,
        requireWellFormed,
        refs
      );
    }
  }
  markup += `</${qualifiedName}>`;
  return markup;
}

function serializeCDATASection(node) {
  return "<![CDATA[" + node.data + "]]>";
}

/**
 * @param {{prefixIndex: number}} refs
 */
function xmlSerialization(node, namespace, prefixMap, requireWellFormed, refs) {
  switch (node.nodeType) {
    case NODE_TYPES$1.ELEMENT_NODE:
      return serializeElement(
        node,
        namespace,
        prefixMap,
        requireWellFormed,
        refs
      );
    case NODE_TYPES$1.DOCUMENT_NODE:
      return serializeDocument(
        node,
        namespace,
        prefixMap,
        requireWellFormed,
        refs
      );
    case NODE_TYPES$1.COMMENT_NODE:
      return serializeComment(node, namespace, prefixMap, requireWellFormed);
    case NODE_TYPES$1.TEXT_NODE:
      return serializeText(node, namespace, prefixMap, requireWellFormed);
    case NODE_TYPES$1.DOCUMENT_FRAGMENT_NODE:
      return serializeDocumentFragment(
        node,
        namespace,
        prefixMap,
        requireWellFormed,
        refs
      );
    case NODE_TYPES$1.DOCUMENT_TYPE_NODE:
      return serializeDocumentType(
        node,
        namespace,
        prefixMap,
        requireWellFormed
      );
    case NODE_TYPES$1.PROCESSING_INSTRUCTION_NODE:
      return serializeProcessingInstruction(
        node,
        namespace,
        prefixMap,
        requireWellFormed
      );
    case NODE_TYPES$1.ATTRIBUTE_NODE:
      return "";
    case NODE_TYPES$1.CDATA_SECTION_NODE:
      return serializeCDATASection(node);
    default:
      throw new TypeError("Failed to serialize XML: only Nodes can be serialized.");
  }
}

var serialize = (root, { requireWellFormed = false } = {}) => {
  const namespacePrefixMap = Object.create(null);
  namespacePrefixMap["http://www.w3.org/XML/1998/namespace"] = ["xml"];
  return xmlSerialization(root, null, namespacePrefixMap, requireWellFormed, {
    prefixIndex: 1
  });
};

export default serialize;
//# sourceMappingURL=xmlserializer.esm.js.map
