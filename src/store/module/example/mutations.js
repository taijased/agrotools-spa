/*
export function someMutation (state) {
}
*/
// export function UPDATE_DRAWER_STATE (state, opened) {
//   state.drawerState = opened
// }
export const UPDATE_DRAWER_STATE = (state, opened) => {
  state.drawerState = opened
}
export const UPDATE_COLOR = (state, color) => {
  state.color = color
}
export const UPDATE_TITLE = (state, title) => {
  state.title = title
}
export const UPDATE_BACK = (state) => {
  state.back = !state.back
}
