import * as types from "../mutation-types";
const state = () => ({
  items: []
});

const mutations = {
  [types.ADD_ITEM](state, item) {
    state.items.push(item);
  },

  [types.REMOVE_ITEM](state, id) {
    state.items = state.items.filter(item => item.id !== id);
  }
};

export default {
  namespaced: true,
  state,
  mutations
};
