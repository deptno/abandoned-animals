const {join} = require('path')
const globals = require('dotenv').config({path: join(__dirname, '.env')}).parsed

module.exports = {
  bail     : true,
  preset   : 'ts-jest',
  testMatch: [
    '**/?(*.)(spec|test).ts?(x)',
    '__tests__/**/*.ts?(x)'
  ],
  rootDir: __dirname,
  setupFiles: [
    './jest.setup.js'
  ],
  globals
}
