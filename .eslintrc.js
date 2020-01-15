module.exports = {
  env: {
    browser: true,
    es6: true
  },
  parser: 'babel-eslint',
  settings: {
    polyfills: [
      'console',
      'Object.assign',
      'Object.defineProperties',
      'Object.getOwnPropertyDescriptor',
      'Proxy',
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
      files: '*.md',
      rules: {

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
    'no-shadow': 0
  }
};
