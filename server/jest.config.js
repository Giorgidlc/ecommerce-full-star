module = {
    roots: ['<rootDir>/test'],
  
 
    moduleFileExtensions: ['js', 'json', 'jsx', 'ts', 'tsx', 'node'],
  

    transform: {
      '^.+\\.(js|jsx)$': 'babel-jest',
    },
  
   
    testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|js?)$',
  
    modulePathIgnorePatterns: ['<rootDir>/node_modules'],

    collectCoverage: true,
    collectCoverageFrom: ['src/**/*.{js,jsx}', '!src/index.js'],

    coverageDirectory: 'coverage',
    coverageReporters: ['text', 'lcov'],
  
   
    watchPathIgnorePatterns: ['node_modules'],
  }