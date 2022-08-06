<template>
  <h1
    class="font-bold text-lg bg-clip-text text-transparent bg-gradient-to-tr from-green-600 dark:from-green-400 to-blue-600 dark:to-blue-400"
  >
    {{ brand }}
  </h1>
</template>

<script>
export default {
  name: "BrandText",
  data() {
    return {
      brand: "Vue.js",
    };
  },
};
</script>
