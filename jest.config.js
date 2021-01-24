module.exports = {
  collectCoverageFrom: [
    'src/app/**',
  ],
  coverageDirectory: 'coverage',
  coveragePathIgnorePatterns: [
    '<rootDir>/.*\.module\.ts',
    '<rootDir>/node_modules/',
  ],
}
