#!/bin/bash

rm -rf ./dist

mkdir ./dist

cp ./public/* ./dist

cp ./src/validator/index.js ./dist/validator.js

cp ./src/app/index.js ./dist/app.js