'use strict'

var features = require('es-feature-detect')

module.exports = [
  !features.trailingFunctionCommas && require('babel-plugin-syntax-trailing-function-commas'),
  !features.asyncFunctions && require('babel-plugin-transform-async-to-generator')
]
