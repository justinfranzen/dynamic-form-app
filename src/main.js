// src/main.js
import Vue from 'vue'
import App from './App.vue'
import store from './store'
import DynamicForm from './components/DynamicForm.vue'
import FormResults from './components/FormResults.vue'
import TextInput from './components/TextInput.vue'
import CheckBox from './components/CheckBox.vue'
import DropDown from './components/DropDown.vue'

new Vue({
  render: (h) => h(App),
  store
}).$mount('#app')