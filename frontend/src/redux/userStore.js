import { createStore } from 'redux'

const initialState = {}

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN_USER':
      return {
        ...state,
        ...action.data
      }
    default:
      return state
  }
}

const userStore = createStore(userReducer)

export default userStore
