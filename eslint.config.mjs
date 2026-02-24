import { defineConfig, globalIgnores } from 'eslint/config';
import nextVitals from 'eslint-config-next/core-web-vitals';
import nextTs from 'eslint-config-next/typescript';
import prettier from 'eslint-config-prettier';

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  prettier,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    '.next/**',
    'out/**',
    'build/**',
    'next-env.d.ts',
  ]),
]);

// export default eslintConfig;

// import { FlatCompat } from '@eslint/eslintrc';
// import path from 'path';
// import { fileURLToPath } from 'url';

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// const compat = new FlatCompat({
//   baseDirectory: __dirname,
// });

// const eslintConfig = [
//   // 1. Базові налаштування Next.js (включаючи core-web-vitals)
//   ...compat.extends('next/core-web-vitals', 'next/typescript'),

//   // 2. Вимкнення правил, що конфліктують з Prettier
//   ...compat.extends('prettier'),

//   // 3. Налаштування ігнорування файлів
//   {
//     ignores: [
//       '.next/**',
//       'out/**',
//       'build/**',
//       'next-env.d.ts',
//       'node_modules/**',
//     ],
//   },
// ];

// export default eslintConfig;

// import { FlatCompat } from '@eslint/eslintrc';

// const compat = new FlatCompat({
//   baseDirectory: import.meta.dirname,
// });

// const eslintConfig = [
//   ...compat.extends('next/core-web-vitals', 'next/typescript'),
//   {
//     ignores: ['.next/**', 'node_modules/**'],
//   },
// ];

// export default eslintConfig;
