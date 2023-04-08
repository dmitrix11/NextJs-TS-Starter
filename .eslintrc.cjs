/** @type {import("eslint").Linter.Config} */
module.exports = {
  overrides: [
    {
      extends: [
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
      ],
      files: ['*.ts', '*.tsx'],
      parserOptions: {
        project: './tsconfig.json',
      },
    },
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module', // Allows for the use of import
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.json'],
  },
  plugins: ['@typescript-eslint'],
  extends: [
    'airbnb-base',
    'airbnb-typescript',
    'next/core-web-vitals',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'prettier',
  ],
  rules: {
    '@typescript-eslint/no-misused-promises': [
      2,
      {
        checksVoidReturn: {
          attributes: false,
        },
      },
    ],
    '@typescript-eslint/consistent-type-imports': [
      'warn',
      {
        prefer: 'type-imports',
        fixStyle: 'inline-type-imports',
      },
    ],
    'prettier/prettier': ['error', { endOfLine: 'auto' }],
  },
};
