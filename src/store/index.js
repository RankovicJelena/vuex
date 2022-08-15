import { createStore } from 'vuex';
import rootMutations from './mutations.js';
import rootActions from './actions.js';
import rootGettres from './getters.js';
import counterModule from './counter/index.js';

const store = createStore({
  state() {
    return {
      isLoggedIn: false,
    };
  },
  modules: {
    numbers: counterModule,
  },

  mutations: rootMutations,

  actions: rootActions,

  getters: rootGettres,
});

export default store;
