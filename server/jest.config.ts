const config = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    collectCoverage: true,
    coveragePathIgnorePatterns: [
      '/node_modules/',
      '/test/',
      '/dist/'
    ],
    moduleFileExtensions: ['js', 'json', 'jsx', 'ts', 'tsx'],
    transform: {
      '^.+\\.(t|j)sx?$': 'ts-jest'
    }
  };
  export default config;
  

     
        