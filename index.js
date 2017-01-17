'use strict'

const {resolve} = require('path')
const chalk = require('chalk')
const pkg = require('./package.json')
const debug = require('debug')(`${pkg.name}:boot`)

// This will load a secrets file from
//
//      ~/.your_app_name.env.js
//   or ~/.your_app_name.env.json
//
// and add it to the environment.
const env = Object.create(process.env),
  secretsFile = resolve(env.HOME, `.${pkg.name}.env`)
try {
  Object.assign(env, require(secretsFile))
} catch ( error ) {
  debug('%s: %s', secretsFile, error.message)
  debug('%s: env file not found or invalid, moving on', secretsFile)
}

module.exports = {
  get name() {
    return pkg.name
  },
  get isTesting() {
    return !!global.it
  },
  get isProduction() {
    return process.env.NODE_ENV === 'production'
  },
  get baseUrl() {
    return env.BASE_URL || `http://localhost:${env.PORT}`
  },
  get port() {
    return env.PORT || 1337
  },
  package: pkg,
  env,
}
