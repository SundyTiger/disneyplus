import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";
export default createStore({
  plugins: [createPersistedState()],
  state: {
    token: localStorage.getItem("token"),
    user_token: null,
    user: null,
    isUser: false,
    imgData: [],
    imgObj: {},
    imgArray: [],
    global: [],
    logShow: false,
  },
  mutations: {
    TOKEN_ADD(state, value) {
      state.token = value;
    },
    NULL_VAL(state) {
      state.imgData = [];
      state.imgArray = [];
      state.imgObj = {};
    },
    CREATE_ARR(state, data) {
      for (let x in data) {
        if (state.imgArray.length == 0) {
          state.imgObj["class"] = "carousel-item active";
        } else {
          state.imgObj["class"] = "carousel-item";
        }
        if (state.imgData.length == 8) {
          state.imgObj["imgSrcs"] = state.imgData;
          state.imgArray.push(state.imgObj);
          state.imgData = [];
          state.imgObj = {};
        } else {
          state.imgData.push(data[x]);
        }
      }
      state.imgObj["imgSrcs"] = state.imgData;
      state.imgArray.push(state.imgObj);
      return state.imgArray;
    },
    SHOW(state) {
      !state.logShow;
    },
    GLOBAL(state, value) {
      state.global = value;
    },
    setToken(state, token) {
      state.user_token = token;
      if (token) {
        state.isUser = true;
      } else {
        state.isUser = false;
      }
    },
    setUser(state, user) {
      state.user = user;
    },
  },
  actions: {
    setToken({ commit }, token) {
      commit("setToken", token);
    },
    setUser({ commit }, user) {
      commit("setUser", user);
    },
  },
  modules: {},
});
