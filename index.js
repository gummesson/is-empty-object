/**
 * Dependencies
 */

var owns = Object.prototype.hasOwnProperty;
var OBJECT = "object";

/**
 * Check whether `obj` is empty.
 * Works for objects and sparse arrays and only considers enumerable, owned
 * properties or indexes.
 * Short circuits on the first encountered property.
 * Creates no garbage.
 * Returns undefined for non-objects.
 *
 * @param  {object} obj
 * @return {boolean}
 *
 * @api public
 */

function isEmptyObject(obj) {
  if (!obj || typeof obj !== OBJECT) {
    return;
  }
  for (var name in obj) {
    if (owns.call(obj, name)) {
      return false;
    }
  }
  return true;
}

/**
 * Exports
 */

module.exports = isEmptyObject
