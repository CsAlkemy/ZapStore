import axios, { Method } from "axios";
import { createStore } from "vuex";
const url =
  "https://raw.githubusercontent.com/qtecsolution/Sample-JSON/main/combination.json";

export default createStore({
  state() {
    return {
      combination: [],
    };
  },
  getters: {
    allCombination: (state: any) => state.combination,
  },

  actions: {
    async getCombinationData({ commit }) {
      const response = await axios.get(url);
      commit("setCombinationData", response.data);
    },
  },
  mutations: {
    setCombinationData: (state, combination) =>
      (state.combination = combination),
  },

  modules: {},
});
