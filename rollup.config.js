// import babel from 'rollup-plugin-babel';
// import {terser} from 'rollup-plugin-terser';

// We don't need this so long as we are hard-coding the
//  `node_modules` path for the sake of the browser, but keeping
//  in event we can use import paths later
import nodeResolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

/**
 * @external RollupConfig
 * @type {PlainObject}
 * @see {@link https://rollupjs.org/guide/en#big-list-of-options}
 */

/**
 * @param {PlainObject} [config= {}]
 * @param {boolean} [config.minifying=false]
 * @param {string} [config.format='umd']
 * @returns {external:RollupConfig}
 */
function getRollupObject ({minifying, format = 'umd'} = {}) {
  const nonMinified = {
    input: 'src/index.js',
    output: {
      format,
      sourcemap: minifying,
      file: `dist/index.${format}${minifying ? '.min' : ''}.js`,
      name: 'Dominum'
    },
    plugins: [
      // babel(),
      nodeResolve()
    ]
  };
  if (minifying) {
    // nonMinified.plugins.push(terser());
  }
  return nonMinified;
}

// eslint-disable-next-line import/no-anonymous-default-export
export default [
  // getRollupObject({minifying: true, format: 'umd'}),
  getRollupObject({minifying: false, format: 'umd'}),
  // getRollupObject({minifying: true, format: 'esm'}),
  getRollupObject({minifying: false, format: 'esm'}),
  {
    input: 'node_modules/w3c-xmlserializer',
    output: {
      format: 'esm',
      sourcemap: true,
      file: `test/browser/xmlserializer.esm.js`
    },
    plugins: [
      nodeResolve(),
      commonjs()
    ]
  }
];
