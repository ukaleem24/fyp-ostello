import { createStore } from "vuex";

export default createStore({
  state() {
    return {
      listings: [],
    };
  },
  mutations: {
    addListing(state, payload) {
      state.listings.push(payload);
    },
  },
  actions: {
    addNewListing(context, payload) {
      context.commit("addListing", payload);
    },
  },
  modules: {},
  getters: {
    getListings(state) {
      return state.listings;
    },
  },
});
