
// export const getters = {
//   isAuthenticated(state) {
//     return state.auth.loggedIn
//   },

//   loggedInUser(state) {
//     return state.auth.user
//   }
// }

import Vuex from 'vuex'

const store = () => {
  return new Vuex.Store({
    state: {},
    mutations: {},
    actions: {},
    getters: {
      isAuthenticated(state) {
        return state.auth.loggedIn
      },
    
      loggedInUser(state) {
        return state.auth.user
      }
    }
  })
}
export default store