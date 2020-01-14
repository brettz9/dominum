module.exports = {
  env: {
    browser: true,
    es6: true
  },
  settings: {
    polyfills: [
      'Object.assign'
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
