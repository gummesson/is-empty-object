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
  assert.equal(isEmptyObject([]), false, 'returns false if not an object')
  assert.end()
})
