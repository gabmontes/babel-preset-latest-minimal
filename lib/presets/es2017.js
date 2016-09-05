'use strict'

var features = require('es-feature-detect')

module.exports = [
  !features.trailingFunctionCommas && 'syntax-trailing-function-commas',
  !features.asyncFunctions && 'transform-async-to-generator'
]
