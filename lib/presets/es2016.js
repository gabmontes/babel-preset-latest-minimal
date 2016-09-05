'use strict'

var features = require('es-feature-detect')

module.exports = [
  !features.exponentiationOperator && 'transform-exponentiation-operator'
]
