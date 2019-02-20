import resolve from 'rollup-plugin-node-resolve';
import replace from 'rollup-plugin-replace';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel'
import json from 'rollup-plugin-json'
import { terser } from 'rollup-plugin-terser'
import sourceMaps from 'rollup-plugin-sourcemaps'
import external from 'rollup-plugin-peer-deps-external'
import builtIns from 'rollup-plugin-node-builtins'
import { sizeSnapshot } from "rollup-plugin-size-snapshot";
import visualizer from 'rollup-plugin-visualizer'
import pkg from './package.json';

const propTypeIgnore = { "import PropTypes from 'prop-types';": "'';" };
const streamIgnore = { "import stream from ';'": "'';" };

const extensions = [".js"];

const globals = {
  'react': 'React',
  'react-dom': 'ReactDOM',
  'styled-components': 'styled',
  'rebass': 'rebass',
  'styled-system': 'styled-system',
  'prop-types': 'PropTypes',
}

const cjs = {
  name: 'rebasskit',
  exports: 'named',
  format: 'cjs',
  sourcemap: true,
  globals
}

const esm = {
  name: 'rebasskit',
  format: 'esm',
  sourcemap: true,
  globals
}

const getCJS = override => ({ ...cjs, ...override })
const getESM = override => ({ ...esm, ...override })

const commonPlugins = [
  external(),
  sourceMaps(),
  json(),
  babel({
    runtimeHelpers: true,
    exclude: 'node_modules/**',
  }),
  resolve({
    extensions,
    browser: true,
    jsnext: true,
    main: true
  }),
  commonjs({
    ignoreGlobal: true,
    extensions,
    namedExports: {
      'react-is': ['isElement', 'isValidElementType', 'ForwardRef'],
    },
  }),
  builtIns(),
  replace({
    __DEV__: JSON.stringify(false),
    __VERSION__: JSON.stringify(pkg.version)
  }),
  // sizeSnapshot(),
  // visualizer({
  //   title: 'rebasskit',
  //   sourcemap: true,
  //   open: true
  // })
]

const prodPlugins = [
  replace({
    ...propTypeIgnore,
    'process.env.NODE_ENV': JSON.stringify('production'),
  }),
  terser()
]

const configBase = {
  input: './src/index.js',
  experimentalCodeSplitting: true,
  external: Object.keys(globals),
  plugins: commonPlugins,
}

const prodConfig = {
  ...configBase,
  output: {
    file: 'dist/rebasskit.min.js',
    format: 'iife',
    name: 'rebasskit',
    exports: 'named',
    sourcemap: true,
    globals
  },
  plugins: configBase.plugins.concat(prodPlugins),
}

const serverConfig = {
  ...configBase,
  output: [
    getESM({
      file: 'dist/rebasskit.esm.js',
    }),
    getCJS({
      file: 'dist/rebasskit.cjs.js',
    }),
  ],
  plugins: configBase.plugins.concat(
    replace({
    __SERVER__: JSON.stringify(true),
    })
  ),
}

const browserConfig = {
  ...configBase,
  output: [
    getESM({
      file: 'dist/rebasskit.browser.esm.js'
    }),
    getCJS({
      file: 'dist/rebasskit.browser.cjs'
    })
  ],
  plugins: configBase.plugins.concat(
    replace({
      ...streamIgnore,
      __SERVER__: JSON.stringify(false),
    }),
  )
}

export default [
  prodConfig,
  serverConfig,
  browserConfig,
]

