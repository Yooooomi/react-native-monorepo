const path = require('path');
const {override, babelInclude, addWebpackAlias, fixBabelImports} = require('customize-cra');

module.exports = override(
  fixBabelImports('module-resolver', {
    alias: {
      '^react-native$': 'react-native-web',
    },
  }),
  addWebpackAlias({
    'react-native': 'react-native-web',
  }),
  babelInclude([
    path.resolve('src'),
    path.resolve('../common'),
    path.resolve('../native'),
  ]),
)