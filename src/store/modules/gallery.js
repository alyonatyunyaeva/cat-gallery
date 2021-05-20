import { picturesAPI } from "@/api";

const initialState = () => ({
  loading: false,
  gallery: {
    animated: [],
    boxes: [],
    hats: [],
    space: [],
  },
  currentPic: null,
});

// const initialGallery = () => ({
// });

const state = initialState();

const getters = {
  gallery: (state) => state.gallery,
  currentPic: (state) => state.currentPic,
  loading: (state) => state.loading,
};

const actions = {
  getPictures: async ({ commit }, opts) => {
    let {type, params} = opts;
    console.log(type, 'type');
    state.loading = true;
    let pictures = await picturesAPI.fetchPictures(params);
    commit("_setPictures", {type, pictures});
    setTimeout(()=>{
      state.loading = false;
    }, 700);

  },
  setCurrentPic: ({ commit }, pic) => {
    commit("_setCurrentPic", pic);
  },
  removeCurrentPic: ({ commit }) => {
    commit("_removeCurrentPic");
  },
  flush: ({ commit }) => {
    commit("_flush");
  },

};

const mutations = {

  _setPictures: (state, opts) => {
    let {type, pictures} = opts;
    state.gallery[type] = pictures;
  },
  _setCurrentPic: (state, pic) => {
    state.currentPic = pic;
  },
  _removeCurrentPic: (state) => {
    state.currentPic = null;
  },
  _flush: (state) => {
    Object.assign(state, initialState());
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
