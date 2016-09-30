'use strict'

var features = require('es-feature-detect')

module.exports = [
  !features.templateLiterals && 'transform-es2015-template-literals',
  !(features.octalIntegerLiterals && features.unicodeLiterals) && 'transform-es2015-literals',
  !features.functionName && 'transform-es2015-function-name',
  !features.arrowFunctions && 'transform-es2015-arrow-functions',
  !features.blockLevelFunctionDeclaration && 'transform-es2015-block-scoped-functions',
  !features.class && 'transform-es2015-classes',
  !features.objectSuper && 'transform-es2015-object-super',
  !(features.shorthandProperties && features.shorthandMethods) && 'transform-es2015-shorthand-properties',
  'transform-es2015-duplicate-keys',
  !features.computedProperties && 'transform-es2015-computed-properties',
  !features.forOf && 'transform-es2015-for-of',
  !features.stickyRegExp && 'transform-es2015-sticky-regex',
  !features.unicodeRegExp && 'transform-es2015-unicode-regex',
  !features.const && 'check-es2015-constants',
  !features.spreadOperator && 'transform-es2015-spread',
  !(features.defaultParameters && features.restParameters) && 'transform-es2015-parameters',
  !features.destructuring && 'transform-es2015-destructuring',
  !(features.const && features.let) && 'transform-es2015-block-scoping',
  !features.typeofSymbol && 'transform-es2015-typeof-symbol',
  !features.moduleExport && 'transform-es2015-modules-commonjs',
  !features.generators && 'transform-regenerator'
]
