import Vue from "vue";
import Vuex from "vuex";
import { getField, updateField } from "vuex-map-fields";
import VuexPersistence from "vuex-persist";
import settings from "./modules/settings";

Vue.use(Vuex);

const vuexLocal = new VuexPersistence({
  storage: window.localStorage
});

export const store = new Vuex.Store({
  strict: true,
  plugins: [vuexLocal.plugin],
  modules: {
    settings: settings
  },
  getters: {
    getField
  },
  mutations: {
    updateField
  }
});
