#starta
Angular starter project based on Hot Towel from John Papa
	
## Pre-Requisites
Install [Node.js](http://nodejs.org)

Install these NPM packages globally:

`npm install -g bower gulp nodemon karma-cli`

## Installing Packages
- Open terminal
- Type `npm install`

## Running dev
Type `gulp serve-dev` and browse to `http://localhost:7300`

## Build the release version
Type `gulp build` minification of scripts with revision numbers and output to the build folder.

## Running the released version
Type `gulp serve-build` and browse to `http://localhost:7300`
Serves the build folder

## Linting
Type `gulp analyze` to run code analysis on the code.

## Remove analysis and build folders
Type `gulp clean`