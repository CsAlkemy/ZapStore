import axios, { Method } from "axios";
import { createStore } from "vuex";
const url =
  "https://raw.githubusercontent.com/qtecsolution/Sample-JSON/main/combination.json";

const vurl =
  "https://raw.githubusercontent.com/qtecsolution/Sample-JSON/main/variation.json";

export default createStore({
  state() {
    return {
      Storage: [],
      Color: [],
      Sim: [],
      Region: [],
      variationData: [],
    };
  },
  getters: {
    StorageData: (state: any) => state.Storage,

    ColorData: (state: any) => state.Color,
    SimData: (state: any) => state.Sim,
    RegionData: (state: any) => state.Region,
    allVariationData: (state: any) => state.variationData,
  },

  actions: {
    async getCombinationData({ commit }) {
      const response = await axios.get(url);
      commit("getStorage", response.data[0]);
      commit("getColor", response.data[1]);
      commit("getSim", response.data[2]);
      commit("getRegion", response.data[3]);
    },

    async getVariationData({ commit }) {
      const response = await axios.get(vurl);
      commit("getVariation", response.data);
      console.log(response.data);
    },
  },
  mutations: {
    getStorage: (state, Storage) => (state.Storage = Storage),
    getColor: (state, Color) => (state.Color = Color),
    getSim: (state, Sim) => (state.Sim = Sim),
    getRegion: (state, Region) => (state.Region = Region),

    getVariation: (state, variationData) =>
      (state.variationData = variationData),
  },

  modules: {},
});

//Regex for finding color code
//[^_]+$
