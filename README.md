# Image Classification API
This repository is an example to see how serve a machine learning model with [TensorFlow](https://www.tensorflow.org/) and [NestJS](https://nestjs.com/).

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


# Testing the API
## Routes
### `GET /lya/classNames` - Get the class names
```bash
$ curl http://localhost:3000/lya/classNames
```

### `GET /lya/predict` - Predict the class of an image
```bash
$ curl -X POST -F "image=@./path/to/image.jpg" http://localhost:3000/lya/predict
```