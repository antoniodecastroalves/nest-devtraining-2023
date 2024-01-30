export default {
  moduleFileExtension: ['js', 'json', 'ts'],
  testRegex: '.*\\.e2e-spec\\.ts$/',
  transform: {
    '^.+\\.(t|j)s$': 'ts-jest',
  },
  collectionCoverageFrom: ['**/*.(t|j)s'],
  coverageDirecttory: '../coverage',
  testEnvironment: 'node',
}
