module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
    'react',
    'simple-import-sort',
    'react-hooks',
    'eslint-plugin-no-inline-styles',
    'prettier',
  ],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'eslint-config-prettier',
    'prettier',
  ],
  ignorePatterns: ['.eslintrc.js', 'scripts/*/*.js', 'jest.*'],
  parserOptions: {
    project: [
      'tsconfig.base.json',
      'packages/mobile/tsconfig.json',
      'packages/web/tsconfig.json',
      'packages/common/tsconfig.json',
    ],
    tsconfigRootDir: __dirname,
  },
};
