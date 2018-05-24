/**
 * Dependencies
 */

/**
 * Check if `obj` is empty.
 *
 * @param  {object} obj
 * @return {boolean}
 *
 * @api public
 */

function isEmptyObject(obj) {
  if (!obj || typeof obj !== 'object' || Array.isArray(obj))
    return false
  return !Object.keys(obj).length
}

/**
 * Exports
 */

module.exports = isEmptyObject
