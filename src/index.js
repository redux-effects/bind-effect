/**
 * Bind effect
 */

function bind (action, ...args) {
  const meta = {...(action.meta || {})}
  meta.steps = [...(meta.steps || []), [...args]]

  return {
    ...action,
    meta
  }
}

/**
 * Exports
 */

export default bind
