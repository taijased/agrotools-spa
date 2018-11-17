
export const SET_VIEW_CARDS = (state, payload) => {
  state.viewCards = payload
}

export const SET_NEW_URL = (state, new_url) => {
  try {
    state.allUrl.push({
      title: new_url,
      route: '/product/:id'
    })
  } catch (error){
    console.log('SET_NEW_URL:' + error)
  }
}
