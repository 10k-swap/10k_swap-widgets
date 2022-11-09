module.exports = {
  extends: ['plugin:vue/vue3-essential', 'eslint:recommended', '@vue/typescript/recommended', '@vue/prettier', '@vue/prettier/@typescript-eslint'],
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: 'module',
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
    },
  },
  plugins: ['@typescript-eslint/eslint-plugin'],
  rules: {
    quotes: 'single',
    'sort-vars': 0,
    eqeqeq: 0,
    'valid-typeof': 2,
    'space-after-keywords': [0, 'always'],
    '@typescript-eslint/no-explicit-any': 'off',
    'quote-props': [0, 'always'],
    semi: [2, 'always'],
    'semi-spacing': [0, { before: false, after: true }],
    'key-spacing': [0, { beforeColon: false, afterColon: true }],
    '@typescript-eslint/explicit-module-boundary-types': 'off',
  },
}
