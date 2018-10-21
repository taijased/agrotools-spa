/*
export function someAction (context) {
}
*/
export function setMenu ({ commit }, payload) {
    commit('UPDATE_DRAWER_STATE', payload)
}
// export function setColor ({ commit }, payload) {
//     commit('UPDATE_COLOR', payload)
// }
// export function setTitle ({ commit }, payload) {
//     commit('UPDATE_TITLE', payload)
// }
export function updateHeader ({ commit }, payload) {
    commit('UPDATE_COLOR', payload.color)
    commit('UPDATE_TITLE', payload.title)
}
export function goBackAction ({ commit }) {
    commit('UPDATE_BACK')
}
