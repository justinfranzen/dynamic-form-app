<!-- TextInput.vue -->
<template>
  <div>
    <label>{{ field.label }}</label>
    <input v-model="field.value" :type="field.type" :name="field.name" />
  </div>
</template>

<script>
export default {
  props: ['field'],
};
</script>