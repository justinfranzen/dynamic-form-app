<!-- App.vue -->
<template>
  <div>
    <DynamicForm v-if="!submittedData" />
    <FormResults v-else />
  </div>
</template>

<script>
// Inform form and form results
import DynamicForm from './components/DynamicForm.vue';
import FormResults from './components/FormResults.vue';
import DropDown from './components/DropDown.vue';
import CheckBox from './components/CheckBox.vue';
import TextArea from './components/TextArea.vue';
import TextInput from './components/TextInput.vue';


export default {
  components: {
    DynamicForm,
    FormResults,
    TextInput,
    TextArea,
    CheckBox,
  },
  computed: {
    submittedData() {
      return this.$store.state.form.submittedData;
    },
  },
};
</script>