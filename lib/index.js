'use strict'

var requiredPlugins = []
  .concat(require('./presets/es2015'))
  .concat(require('./presets/es2016'))
  .concat(require('./presets/es2017'))
  .filter(Boolean)

module.exports = requiredPlugins
