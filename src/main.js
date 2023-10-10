// src/main.js
import Vue from 'vue'
import App from './App.vue'
import store from './store'
import DynamicForm from './components/DynamicForm.vue'
import FormResults from './components/FormResults.vue'

new Vue({
  render: (h) => h(App),
  store
}).$mount('#app')