/**
 * Dependencies
 */

var typeOf = require('type-of')

/**
 * Check if `obj` is empty.
 *
 * @param  {object} obj
 * @return {boolean}
 *
 * @api public
 */

function isEmptyObject(obj) {
  return typeOf(obj) === 'object' && !Object.keys(obj).length
}

/**
 * Exports
 */

module.exports = isEmptyObject
