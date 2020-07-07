module.exports = {
  preset: "ts-jest",
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",
  transform: {
    // Regex selects .tsx+ files to be transpiled to .jsx+ before running.
    "^.+\\.(ts|tsx)$": "ts-jest",
  },
  globals: {
    // Point ts-jest to jsconfig for transpilation.
    "ts-jest": {
      tsConfig: "tsconfig.json",
    },
  },
};
