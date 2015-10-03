/**
 * Imports
 */

import test from 'tape'
import bind from '../src'

/**
 * Tests
 */

test('should work', ({deepEqual, end}) => {
  deepEqual(bind({}, test), {type: 'EFFECT_COMPOSE', payload: {}, meta: {steps: [[test]]}})
  deepEqual(bind(bind({}, test), test2), {
    type: 'EFFECT_COMPOSE',
    payload: {
      type: 'EFFECT_COMPOSE',
      payload: {},
      meta: {
        steps: [[test]]
      }
    },
    meta: {
      steps: [[test2]]
    }
  })

  end()

  function test () {}
  function test2 () {}
})
