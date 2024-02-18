module.exports = {
  extends: ['eason', 'next/core-web-vitals', 'plugin:prettier/recommended'],
  rules: {
    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        components: ['Link'],
        specialLink: ['hrefLeft', 'hrefRight'],
        aspects: ['invalidHref', 'preferButton'],
      },
    ],
  },
  overrides: [
    {
      files: '**/*.{ts,tsx}',
      extends: ['eason/typescript', 'plugin:prettier/recommended'],
    },
  ],
  settings: {
    'import/ignore': ['contentLayerAdapter.js'],
    'import/resolver': {
      alias: {
        map: [['@', './src']],
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
};