'use strict'

var features = require('es-feature-detect')

module.exports = [
  !features.exponentiationOperator && require('babel-plugin-transform-exponentiation-operator')
]
