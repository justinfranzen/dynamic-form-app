// TextArea.vue
<template>
  <div>
    <label>{{ label }}</label>
    <input type="text" :value="value" @input="updateValue" />
  </div>
</template>

<script>
export default {
  props: ['label', 'value'],
  methods: {
    updateValue(event) {
      this.$emit('input', event.target.value);
    },
  },
};
</script>