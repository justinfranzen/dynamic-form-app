<!-- FormResults.vue -->
<template>
  <div>
    <h1>Form Submitted Successfully</h1>
    <div v-for="(value, key) in formData" :key="key">
      <p><strong>{{ key }}:</strong> {{ value }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ['formData'],
};
</script>