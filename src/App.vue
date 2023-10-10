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

export default {
  components: {
    DynamicForm,
    FormResults,
  },
  computed: {
    submittedData() {
      return this.$store.state.form.submittedData;
    },
  },
};
</script>