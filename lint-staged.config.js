module.exports = {
  '*.{js,jsx,ts,tsx}': ['eslint --fix', 'eslint', 'prettier --write'],
  '**/*.ts?(x)': () => 'npm run type-check',
  '**/*.test.ts': ['jest'],
  '*.{json,yaml}': ['prettier --write'],
};
