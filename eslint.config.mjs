import js from '@eslint/js';
import globals from 'globals';
import { defineConfig } from 'eslint/config';

export default defineConfig([
  {
    ignores: ['dist/**', 'node_modules/**'],
  },
  {
    files: ['**/*.{js}'],
    plugins: { js },
    extends: ['js/recommended'],
  },
  {
    files: ['src/**/*.{js}'],
    languageOptions: {
      globals: globals.browser,
    },
  },
  {
    files: ['webpack.config.js', 'scripts/**/*.{js}'],
    languageOptions: {
      globals: globals.node,
    },
  },
]);
