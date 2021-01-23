export default {
  // Generic Update
  update({ commit }, { key, value }) {
    commit('UPDATE', { key, value })
  },

  pushItem({ commit }, { key, value }) {
    commit('PUSH', { key, value })
  },

  deleteItem({ commit }, { key, idx }) {
    commit('DELETE', { key, idx })
  },

  addSubItem({ commit }, { key, subKey, value }) {
    commit('ADDSUBITEM', { key, subKey, value })
  },

  removeSubItem({ commit }, { key, subKey }) {
    commit('REMOVESUBITEM', { key, subKey })
  },

  logout({ commit }) {
    commit('UPDATEALL', {
      account_id: null,
      account: null,
      connection: null,
    })
  },
}
