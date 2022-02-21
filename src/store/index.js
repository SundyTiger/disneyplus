import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";
export default createStore({
  plugins: [createPersistedState()],
  state: {
    token: localStorage.getItem("token"),
    user_token: null,
    user: null,
    watchlist: null,
    isUser: false,
    imgData: [],
    imgObj: {},
    imgArray: [],
    global: [],
    logShow: false,
    imgSrcs: [],
    imgAdd: false,
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
    SHOW(state) {
      !state.logShow;
    },
    GLOBAL(state, value) {
      state.global.push(value);
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
    SET_IMGSRCS(state, value) {
      state.imgSrcs = value;
    },
    SET_IMG_VAL(state, value) {
      state.imgAdd = value;
    },
    SET_WATCHLIST(state, value) {
      state.watchlist = value;
    },
  },
  actions: {
    setToken({ commit }, token) {
      commit("setToken", token);
    },
    setUser({ commit }, user) {
      commit("setUser", user);
    },
    global({ commit }, value) {
      commit("GLOBAL", value);
    },
    setImgSrcs({ commit }, value) {
      commit("SET_IMGSRCS", value);
    },
    setImgAdd({ commit }, value) {
      commit("SET_IMG_VAL", value);
    },
    setWatchList({ commit }, value) {
      commit("SET_WATCHLIST", value);
    },
  },
  modules: {},
});
