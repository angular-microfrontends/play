module.exports = {
  collectCoverageFrom: [
    'src/app/**',
    'src/single-spa/**',
  ],
  coverageDirectory: 'coverage',
  coveragePathIgnorePatterns: [
    '<rootDir>/.*\.module\.ts',
    '<rootDir>/node_modules/',
  ],
  setupFilesAfterEnv: [
    '<rootDir>/src/jest.setup.ts',
  ],
}
