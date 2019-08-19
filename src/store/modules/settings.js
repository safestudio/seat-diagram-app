const strict = true;

const namespaced = true;

const state = {
  totalGroups: 6,
  totalSeatColumns: 3
};

const getters = {
  seatRowsPerColumn(state) {
    if (state.totalSeatColumns === 0) {
      return false;
    }

    return Math.ceil(state.totalGroups / state.totalSeatColumns);
  }
};

const actions = {};

const mutations = {};

export default {
  strict,
  namespaced,
  state,
  getters,
  actions,
  mutations
};
