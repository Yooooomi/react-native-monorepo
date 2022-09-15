module.exports = {
  extends: ['react-app', '../../.eslintrc.js'],
  rules: {
    'react/react-in-jsx-scope': 'off',
  },
  env: {
    node: true,
    commonjs: true,
    browser: true,
    es6: true,
  },
  ignorePatterns: ['config-overrides.js'],
};
