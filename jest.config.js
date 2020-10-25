module.exports = {
  projects: [
    {
      displayName: "test",
      "roots": [
        "<rootDir>/src"
      ],
      "testMatch": [
        "**/__tests__/**/*.+(ts|tsx|js)",
        "**/?(*.)+(spec|test).+(ts|tsx|js)",
      ],
      "transform": {
        "^.+\\.(ts|tsx)$": "ts-jest",
      },
    },
    {
      displayName: "lint",
      runner: 'jest-runner-eslint',
      testMatch: ['<rootDir>/src/**/*.(js|ts)'],
    }
  ]
};