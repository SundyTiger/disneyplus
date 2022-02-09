import { createStore } from "vuex";

export default createStore({
  state: {
    token: "",
  },
  mutations: {
    TOKEN_ADD(state, value) {
      state.token = value;
    },
  },
  actions: {},
  modules: {},
});
