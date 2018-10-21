import axios from 'axios'

export const UPDATE_DRAWER_STATE = (state, opened) => {
  state.drawerState = opened
}

export const SET_CATEGORY = (state) => {
  axios.get('http://agrotools.store/categories')
        .then(response => {
          state.allCategories = response.data
        })
        .catch(error => {
          console.log(error)
        })
}