export default {
  "coveragePathIgnorePatterns": [
    "node_modules",
    "test-config",
    "interfaces",
    "jestGlobalMocks.ts",
    ".module.ts",
    "<rootDir>/public/assets",
    ".mock.ts"
],
  collectCoverage: true,
  coverageDirectory: "coverage",
  transform: {
    ".+\\.(css|scss|png|jpg|svg|webp)$": "jest-transform-stub",
  },
  preset: "ts-jest",
  testEnvironment: "jsdom",
};
