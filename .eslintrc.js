/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  root: true,
  extends: ['plugin:vue/vue3-essential', 'eslint:recommended', '@vue/eslint-config-typescript/recommended'],
  rules: {
    '@typescript-eslint/no-this-alias': ['error', { allowDestructuring: true, allowedNames: ['_this'] }],
    'no-unused-vars': [0],
    'max-len': [
      'error',
      {
        tabWidth: 2,
        code: 180,
        ignoreUrls: true,
        ignoreTemplateLiterals: true,
      },
    ],
    'array-bracket-spacing': ['error', 'never', { objectsInArrays: false }],
    strict: ['error', 'never'],
    'comma-dangle': [
      'error',
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'never',
      },
    ],
    'comma-spacing': [
      'error',
      {
        before: false,
        after: true,
      },
    ],
    indent: ['error', 2, { SwitchCase: 1 }],
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
    // "linebreak-style": ["error", "unix"],
    'no-multiple-empty-lines': [
      'error',
      {
        max: 1,
        maxEOF: 1,
      },
    ],
    'require-jsdoc': [
      'error',
      {
        require: {
          FunctionDeclaration: true,
          MethodDefinition: false,
          ClassDeclaration: false,
          ArrowFunctionExpression: false,
          FunctionExpression: false,
        },
      },
    ],
  },
};
