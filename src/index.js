/**
 * Bind effect
 */

function bind (action, ...args) {
  return {
    type: 'EFFECT_COMPOSE',
    payload: action,
    meta: {
      steps: [args]
    }
  }
}

/**
 * Exports
 */

export default bind
