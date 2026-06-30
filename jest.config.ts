import type { Config } from "jest";
import nextJest from "next/jest.js";

const createJestConfig = nextJest({
  dir: "./",
});

const config: Config = {
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
  },
  testMatch: ["<rootDir>/src/**/*.test.tsx", "<rootDir>/src/**/*.test.ts"],
  // Ignore Dev B's Vitest-based tests — they use a different test runner
  testPathIgnorePatterns: [
    "<rootDir>/node_modules/",
    "<rootDir>/src/lib/cms/",
  ],
};

export default createJestConfig(config);