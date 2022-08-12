<template>
  <h3>{{ counter }}</h3>
  <p>We do it more...</p>
</template>

<script>
export default {
  computed: {
    counter() {
      return this.$store.getters.normalizedCounter;
    },
  },
};
</script>
