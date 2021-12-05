import { createStore } from "vuex";

export default createStore({
  state() {
    return {
      registerUsers: [],
      listings: [
        {
          id: "1",
          kind: "default",
          type: "Apartment",
          address: "New York 123",
          phone: "00 123 456 789",
          rentalPeriod: "default",
          availableFrom: "",
          price: "1300",
          currency: "PKR ",
          description:
            "This is a nice studio apartment with one bathroom for rent.",
          bed: "No Bed",
          wifi: "WiFi",
          washingMachine: "No Washing Machine",
          dryer: "Dryer",
          tv: "TV",
          airConditioner: "No AC",
          balcony: "No Balcony",
          garden: "Garden",
          pets: "No Pets Allowed",
          parking: "Parking",
          basement: "No Basement",
          furnished: "Furnished",
          images: [
            {
              id: Date.now() + Math.floor(Math.random() * (1000 - 1 + 1)) + 1,
              image:
                "https://housinganywhere.imgix.net/room/1666164/1cbe6586-3e60-4748-ab99-58664ed0eb49.jpg?auto=format&fit=clip&orient=0&ixlib=react-9.2.0&w=1446",
              imageName: "",
            },
            {
              id: Date.now() + Math.floor(Math.random() * (1000 - 1 + 1)) + 1,
              image:
                "https://housinganywhere.imgix.net/room/1666164/2c7b7d12-4352-4220-b79f-46f27da8e820.jpg?auto=format&fit=clip&orient=0&ixlib=react-9.2.0&w=1446",
              imageName: "",
            },
            {
              id: Date.now() + Math.floor(Math.random() * (1000 - 1 + 1)) + 1,
              image:
                "https://housinganywhere.imgix.net/room/1666164/054fcb30-d188-4b1f-a01b-8eb953736425.jpg?auto=format&fit=clip&orient=0&ixlib=react-9.2.0&w=1446",
              imageName: "",
            },
            {
              id: Date.now() + Math.floor(Math.random() * (1000 - 1 + 1)) + 1,
              image:
                "https://housinganywhere.imgix.net/room/1666164/c160ccda-c41b-47ea-b77a-d5a993e4fce3.jpg?auto=format&fit=clip&orient=0&ixlib=react-9.2.0&w=1446",
              imageName: "",
            },
          ],
          averageRating: 4.1,
          reviews: [
            {
              author: "Usama Ilyas",
              authorImage: "https://www.w3schools.com/howto/img_avatar.png",
              email: "1",
              title: "The food was amazing",
              review:
                "Such a lovely place. The host met us at agreed time, showed us everything. The apartment is conveniently located, a short walk to subway, shops, and restaurants. Wi fi worked well. We had a great time.",
              ratting: "4",
            },
            {
              author: "Usama Ilyas",
              authorImage: "https://www.w3schools.com/howto/img_avatar.png",
              email: "2",
              title: "The food was amazing",
              review:
                "Such a lovely place. The host met us at agreed time, showed us everything. The apartment is conveniently located, a short walk to subway, shops, and restaurants. Wi fi worked well. We had a great time.",
              rating: "4",
            },
          ],
          booking: {
            isBooked: false,
            bookeedBy: "Usama Ilyas",
            bookingDate: "02/01/2022",
          },
        },
      ],
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
