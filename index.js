'use strict'

var options = {
  spec: false,
  loose: false
}

var requiredPlugins = []
  .concat(require('./presets/es2015')(options))
  .concat(require('./presets/es2016'))
  .concat(require('./presets/es2017'))

module.exports = {
  plugins: requiredPlugins.filter(Boolean)
}
