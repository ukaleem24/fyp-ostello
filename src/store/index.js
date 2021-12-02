import { createStore } from "vuex";

export default createStore({
  state() {
    return {
      registerUsers: [],
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
    addregisterUsers(state, payload) {
      state.registerUsers.push(payload);
    },
  },

  actions: {
    addNewListing(context, payload) {
      context.commit("addListing", payload);
    },
    addNewUser(context, payload) {
      context.commit("addregisterUsers", payload);
      console.log(payload);
    },
  },
  modules: {},
  getters: {
    getListings(state) {
      return state.listings;
    },
    getRegisterUsers(state) {
      return state.registerUsers;
    },
  },
});
