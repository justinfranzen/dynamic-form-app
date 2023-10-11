<!-- CheckBox.vue -->
<template>
  <div class="custom-checkbox">
    <label v-for="option in options" :key="option.value">
      <input
        type="checkbox"
        :value="option.value"
        v-model="selectedOptions"
        @change="emitValue"
      />
      {{ option.label }}
    </label>
  </div>
</template>

<script>
export default {
  props: {
    options: Array, // Array of objects with { value, label }
    value: Array, // Selected options
  },
  data() {
    return {
      selectedOptions: this.value || [],
    };
  },
  methods: {
    emitValue() {
      this.$emit('input', this.selectedOptions);
    },
  },
};
</script>
