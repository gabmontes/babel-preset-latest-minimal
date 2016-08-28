'use strict'

var features = require('es-feature-detect')

module.exports = function (options) {
  return [
    !features.templateLiterals && [require('babel-plugin-transform-es2015-template-literals'), options],
    !(features.octalIntegerLiterals && features.unicodeLiterals) && require('babel-plugin-transform-es2015-literals'),
    !features.functionName && require('babel-plugin-transform-es2015-function-name'),
    !features.arrowFunctions && [require('babel-plugin-transform-es2015-arrow-functions'), options],
    !features.blockLevelFunctionDeclaration && require('babel-plugin-transform-es2015-block-scoped-functions'),
    !features.class && [require('babel-plugin-transform-es2015-classes'), options],
    !features.objectSuper && require('babel-plugin-transform-es2015-object-super'),
    !(features.shorthandProperties && features.shorthandMethods) && require('babel-plugin-transform-es2015-shorthand-properties'),
    require('babel-plugin-transform-es2015-duplicate-keys'),
    !features.computedProperties && [require('babel-plugin-transform-es2015-computed-properties'), options],
    !features.forOf && [require('babel-plugin-transform-es2015-for-of'), options],
    !features.stickyRegExp && require('babel-plugin-transform-es2015-sticky-regex'),
    !features.unicodeRegExp && require('babel-plugin-transform-es2015-unicode-regex'),
    !features.const && require('babel-plugin-check-es2015-constants'),
    !features.spread && [require('babel-plugin-transform-es2015-spread'), options],
    !(features.default && features.rest) && require('babel-plugin-transform-es2015-parameters'),
    !features.destructuring && [require('babel-plugin-transform-es2015-destructuring'), options],
    !(features.const && features.let) && require('babel-plugin-transform-es2015-block-scoping'),
    !features.typeofSymbol && require('babel-plugin-transform-es2015-typeof-symbol'),
    !features.moduleExport && [require('babel-plugin-transform-es2015-modules-commonjs'), options],
    !features.generators && [require('babel-plugin-transform-regenerator'), { async: false, asyncGenerators: false }]
  ]
}
