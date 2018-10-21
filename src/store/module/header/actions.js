
export function setMenu ({ commit }, payload) {
    commit('UPDATE_DRAWER_STATE', payload)
}

export function fetchCategory ({ commit }) {
    commit('SET_CATEGORY')
}
