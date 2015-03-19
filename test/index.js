/**
 * Dependencies
 */

var test         = require('tape')
var isEmptyObject = require('../')

/**
 * Tests
 */

test('isEmptyObject(obj)', function(assert) {
  assert.equal(isEmptyObject({}), true, 'returns true if empty')
  assert.equal(isEmptyObject({ one: 1 }), false, 'returns false if not empty')
  assert.equal(isEmptyObject([]), true, 'returns true for empty array')
  assert.equal(isEmptyObject([,]), true, 'returns true for empty sparse array')
  assert.equal(isEmptyObject([1]), false, 'returns false for array with value')
  assert.equal(isEmptyObject([,1]), false, 'returns false for sparse array with value')
  assert.equal(isEmptyObject(), undefined, 'returns undefined for undefined')
  assert.equal(isEmptyObject(null), undefined, 'returns undefined for null')
  assert.equal(isEmptyObject(1), undefined, 'returns undefined for number')
  assert.end()
})
