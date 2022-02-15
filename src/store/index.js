import { createStore } from "vuex";

export default createStore({
  state: {
    token: localStorage.getItem("token"),
    imgData: [],
    imgObj: {},
    imgArray: [],
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
      state.logShow = true;
    },
  },
  actions: {},
  modules: {},
});
