// store.js
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    formData: {},
  },
  mutations: {
    setFormData(state, { field, value }) {
      state.formData[field] = value;
    },
    resetFormData(state) {
      state.formData = {};
    },
  },
  actions: {
    submitForm({ commit }, formData) {
      // Perform form submission and validation here
      // If successful, commit the form data to the store
      commit('setFormData', formData);
    },
  },
  getters: {
    formData: (state) => state.formData,
  },
});