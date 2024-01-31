export default {
  moduleFileExtension: ['js', 'json', 'ts'],
  testRegex: '.*\\.e2e-spec\\.ts$/',
  transform: {
    '^.+\\.(t|j)s$': 'ts-jest',
  },
  collectCoverageFrom: ['**/*.(t|j)s'],
  coverageDirecttory: '../coverage',
  testEnvironment: 'node',
}
