'use strict';

module.exports = {
  env: {
    browser: true,
    es6: true
  },
  parser: 'babel-eslint',
  settings: {
    polyfills: [
      'console',
      'Number.parseInt',
      'Object.assign',
      'Object.defineProperties',
      'Object.getOwnPropertyDescriptor',
      'Object.keys',
      'Proxy',
      'Reflect',
      'Symbol.iterator'
    ]
  },
  extends: ['ash-nazg/sauron'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  overrides: [
    {
      files: ['.eslintrc.js'],
      extends: 'plugin:node/recommended-script',
      rules: {
        'import/no-commonjs': 0
      }
    },
    {
      files: '*.md',
      globals: {
        Dominum: true
      },
      rules: {
        'import/unambiguous': 0,
        'import/no-commonjs': 0,
        'import/no-unresolved': ['error', {ignore: ['dominum']}],
        'no-unused-vars': ['error', {
          // eslint-disable-next-line max-len
          varsIgnorePattern: 'DOMException|Node|ParentNode|ChildNode|NamedNodeMap|NodeList|Element|HTMLElement|Attr|DocumentFragment|ProcessingInstruction|CharacterData|Comment|Text|CDATASection|DocumentType|Document|HTMLDocument|XMLDocument|createHTMLDocument'
        }]
      }
    },
    {
      files: '*.html',
      rules: {
        'import/unambiguous': 0
      }
    },
    {
      files: 'test/**',
      env: {mocha: true},
      extends: [
        'plugin:chai-friendly/recommended',
        'plugin:chai-expect/recommended'
      ],
      globals: {
        xmlserializer: true,
        expect: true
      }
    }
  ],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  rules: {
    'no-shadow': 0,

    // Enable later
    'eslint-comments/require-description': 0
  }
};
