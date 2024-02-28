module.exports = {
  // Indicates which environment setup files to run before starting the test suite.
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],

  // Transform file types.
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "babel-jest",
  },

  // Set up testing environment, specifically using jsdom.
  testEnvironment: "jsdom",

  // Configure Jest to recognize and resolve TypeScript file extensions.
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],

  // Ignore some directories in the project when running tests.
  testPathIgnorePatterns: [
    "<rootDir>/.next/",
    "<rootDir>/node_modules/",
    "<rootDir>/path/to/ignored/dir/",
  ],
};
