import { Config } from 'jest';

const config: Config = {
  testEnvironment: 'node',
  testRegex: 'test/.*(unittest|mocktest|test|spec)\\.ts$',
  collectCoverageFrom: ['src/**/*.ts'],
  coveragePathIgnorePatterns: [],
  setupFilesAfterEnv: [], // extensions go here
  preset: 'ts-jest',
  // the integration tests load (and ts-jest compiles) a payload config in beforeAll, which can exceed
  // the 5s default on slower runners / Node 24
  testTimeout: 30000,
};

export default config;
