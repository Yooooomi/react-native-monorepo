module.exports = {
  extends: ['@react-native-community', 'plugin:react-hooks/recommended', '../../.eslintrc.js'],
  rules: {
    'react/react-in-jsx-scope': 'off',
  },
  env: {
    node: true,
    commonjs: true,
    browser: true,
    es6: true,
  },
};
