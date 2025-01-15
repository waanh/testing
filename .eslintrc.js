module.exports = {
    env: {
      browser: true,       
      node: true,          
      jest: true,          
      es2021: true,        
    },
    extends: [
      'eslint:recommended',
    ],
    parserOptions: {
      ecmaVersion: 12,     
      sourceType: 'module',
    },
    ignorePatterns: ['dist/**'],
  };
  