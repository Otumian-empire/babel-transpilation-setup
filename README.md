# Babel setup

## Installation

`npm i --save-dev @babel/core @babel/cli`

## .babelrc

Create a `.babelrc` file in the root folder and add the following:

```json
{
  "presets": ["@babel/preset-env"]
}
```

## Usage

Add the following to the script section of the `package.json` file

```json
...,
"scripts": {
    "build":"babel ./src --out-dir build",
},
...
```

`src` is the source folder and `build` is the target folder. So all you have to do to transpile is to run, `npm run build`.

## Development Mode

Since most of time we'd be developing, install _nodemon_ and create a `nodemon.json` file in the root folder with the following content:

```json
{
  "ignore": ["./node_modules", "./build"],
  "watch": ["./src"],
  "exec": "npm run build && npm start",
  "ext": "js"
}
```

- We ignored the node modules and our target folder, `build`.
- We want _nodemon_ to watch our source folder, `src`.
- Before the server restarts or changes are detected, we build the source folder and run, `npm start`, where `npm start` runs `node build/app.js`.

## Package.json

```json
{
  "name": "babel-transpilation-setup",
  "version": "1.0.0",
  "description": "Making use of babel to transpile es6",
  "main": "build/app.js",
  "scripts": {
    "build": "babel ./src --out-dir build",
    "dev": "node build/app.js",
    "start": "node build/app.js"
  },
  "type": "module",
  "devDependencies": {
    "@babel/cli": "^7.17.10",
    "@babel/core": "^7.18.2",
    "@babel/preset-env": "^7.18.2"
  }
}
```

## More

- [Babel][babel]
- [Video By Nicolo Ribaudo][video]

#

[babel]: https://babeljs.io/setup
[video]: https://youtu.be/UeVq_U5obnE
