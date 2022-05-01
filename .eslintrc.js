module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'google', 'prettier'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    'react/prop-types': 'off',
    'no-console': 'error',
    'require-jsdoc': 'off',
    'no-unused-vars': 'error',
    'react/react-in-jsx-scope': 'off',
    'spaced-comment': [
      'error',
      'always',
      {
        line: {
          markers: ['/'],
        },
      },
    ],
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
}
