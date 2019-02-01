#!/bin/bash

forever start ./back-end/index.js && cd ./front-end && npm run start && forever stop ./back-end/index.js && cd ..

