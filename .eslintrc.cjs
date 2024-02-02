// eslint-disable-next-line
const { rules } = require('eslint-plugin-prettier');

/* eslint-env node */
// eslint-disable-next-line
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  root: true,
  extends: [
    '@unocss',
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    'airbnb-base',
    'plugin:prettier/recommended',
    '@vue/eslint-config-prettier/skip-formatting'
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  settings: {
    'import/resolver': {
      alias: {
        map: [['@', './src']],
        extensions: ['.js', '.vue']
      }
    },
    'import/core-modules': [
      'vite',
      '@vitejs/plugin-vue',
      'unplugin-vue-components/vite',
      'unplugin-auto-import/vite',
      'unocss/vite',
      'unocss',
      '@unocss/reset/tailwind.css',
      'virtual:uno.css'
    ]
  },
  rules: {
    'no-undef': 'off'
  }
};
