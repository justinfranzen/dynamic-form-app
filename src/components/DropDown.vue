<!-- DropDown.vue -->
<template>
  <div class="custom-select">
    <select v-model="selectedValue" @change="emitValue">
      <option value="Mountains">Mountains</option>
      <option value="Oceans">Oceans</option>
      <option value="Deserts">Deserts</option>
    </select>
  </div>
</template>

<script>
export default {
  props: {
    value: String, // Selected value
  },
  data() {
    return {
      selectedValue: this.value,
    };
  },
  methods: {
    emitValue() {
      this.$emit('input', this.selectedValue);
    },
  },
};
</script>
