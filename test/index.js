/**
 * Imports
 */

import test from 'tape'
import bind from '../src'

/**
 * Tests
 */

test('should work', ({deepEqual, end}) => {
  deepEqual(bind({}, test), {meta: {steps: [[test]]}})
  deepEqual(bind(bind({}, test), test2), {meta: {steps: [[test], [test2]]}})
  end()

  function test () {}
  function test2 () {}
})
