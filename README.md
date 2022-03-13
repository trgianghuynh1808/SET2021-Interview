# SET2021-Interview

## How to run project

1. Go to root folder
2. Run cmd `yarn` to install packages
3. Run with modes:

- Server side:

  3a. Run cmd `yarn start:server`

  Note: When run in the first time, you will see error MODULE_NOT_FOUND, don"t worry, you need to wait some seconds, src will auto restart build and then This never do again. The reason for this, because in the first time we don"t have build src.

- Client side:
  3a. Run cmd `yarn start:client`

- Production:
  3a. run cmd `yarn build:prod`

## How to run unit test

1. Go to root folder
2. Run with modes:

- Develope:

  2a. Run cmd `yarn test:dev`

- Coverage:

  2a. Run cmd `yarn test:coverage`

## How to run Eslint

1. Go to root folder
2. Run with modes:

- Eslint check:

  2a. Run cmd `yarn lint`

- Eslint fix:

  2a. Run cmd `yarn lint:fix`
