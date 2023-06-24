# Image Classification API
This repository is an example to see how to use Tensorflow Serving to deploy a model and use it in a NestJS.

## Requirements
 - [Node.js](https://nodejs.org/en/) with [Yarn](https://yarnpkg.com/)
 - [Python](https://www.python.org/) with [Poetry](https://python-poetry.org/)

## Installation
```bash
$ yarn install --frozen-lockfile
$ yarn lya:install-deps
```

## Build the model
```bash
$ yarn lya:train
```

The model will be saved in `./lya-model/` directory.

## Run the API in development mode
```bash
$ yarn start:dev
```

## Run the API in production mode
```bash
$ yarn build
$ yarn start
```