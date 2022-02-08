module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'airbnb',
    'plugin:@typescript-eslint/recommended',
  ],
  env: {
    browser: true,
    node: true,
    serviceworker: true,
  },
  parserOptions: {
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  rules: {
    '@typescript-eslint/indent': ['error', 2],
    indent: 'off',
    'jsx-a11y/anchor-is-valid': ['error', {
      aspects: ['invalidHref', 'preferButton'],
    }],
    'no-console': ['error', {
      allow: ['error', 'info', 'log'],
    }],
    'react/no-danger': 0,
    'import/extensions': ['error', 'never'],
    'max-len': ['error', { ignoreComments: true, code: 150 }],
    semi: ['error', 'never'],
  },
}

// module.exports = {
//   parserOptions: {
//     ecmaVersion: 2018,
//     sourceType: 'module',
//   },
//   env: {
//     browser: true,
//     commonjs: true,
//     es2021: true,
//   },
//   extends: [
//     'airbnb-base',
//   ],
//   // parserOptions: {
//   //   ecmaVersion: 12,
//   // },
//   ignorePatterns: ['seeders/', 'migrations/'],
//   rules: {
//   },
// };
