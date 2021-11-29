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
    removeListing(state, payload) {
      const listingIndex = state.listings.findIndex(
        (listing) => listing.id === payload.id
      );
      state.listings.splice(listingIndex, 1);
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
