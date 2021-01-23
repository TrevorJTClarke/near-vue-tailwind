export default {
  // Generic update
  UPDATE(state, { key, value }) {
    state[key] = value
  },

  UPDATEALL(state, obj) {
    Object.keys(obj).forEach(k => {
      state[k] = obj[k]
    })
  },

  PUSH(state, { key, value }) {
    if (!state[key] || !Array.isArray(state[key])) return
    state[key].push(value)
  },

  DELETE(state, { key, idx }) {
    if (!state[key] || !Array.isArray(state[key])) return
    state[key].splice(idx, 1)
  },

  ADDSUBITEM(state, { key, subKey, value }) {
    if (!state[key]) return
    // flush cache
    delete state[key][subKey]
    // next tick
    setTimeout(() => {
      state[key][subKey] = value
    }, 100)
  },

  REMOVESUBITEM(state, { key, subKey }) {
    if (!state[key]) return
    delete state[key][subKey]
  },
}
