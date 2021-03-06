# Typescript Client

<p align="center">
  <a href="https://github.com/alexmirrington/typescript-client/actions?query=workflow%3Amain">
    <img
      src="https://img.shields.io/github/workflow/status/alexmirrington/typescript-client/main?logo=GitHub"
      alt="GitHub workflow status: main"
    />
  </a>
  <a href="https://github.com/prettier/prettier">
    <img
      src="https://img.shields.io/badge/styled_with-prettier-ff69b4.svg"
      alt="Styled with Prettier"
    />
  </a>
</p>

A web client boilerplate built on TypeScript, React and Webpack.

## Design Decisions

- **Automate development processes**: Set up your tooling properly from the beginning and save yourself future headaches.
- **Minimise configuration**: Utilise packages that use sane defaults out of the box. Less configuration means a cleaner workspace and less time-wasting.

## Getting Started

### Scripts

There are four main `npm` scripts that you should familiarise yourself with:

`npm run build`:

- Runs `webpack` in production mode to generate bundles and other static assets according to `webpack.config.js` and outputs them to `dist`. TypeScript files are handled using `ts-loader`, which uses the `tsconfig.json` configuration for its underlying transpilation step.

`npm start` or `npm run start`:

- Runs `server.js` with `node`. You will need to make sure you have previously run `npm run build` to generate static assets with Webpack. This script should be used when running the server in production.

`npm run dev`:

- Concurrently runs `server.js` with `nodemon` and `webpack` in development mode, resulting in a development workflow that repacks changed assets on the fly.

`npm test` or `npm run test`:

- Runs all tests with `jest` and outputs a coverage report. Tests can be placed in either a `__tests__` directory inside any level of the `src` folder, or in a separate `tests` directory at the root of the project folder. Tests should be named `*.test.ts` or `*.test.js`.
