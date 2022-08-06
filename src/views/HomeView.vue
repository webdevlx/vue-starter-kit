<template>
  <div>
    <AsyncMainSection />
  </div>
</template>

<script>
import { defineAsyncComponent } from "vue";
export default {
  name: "HomeView",
  components: {
    AsyncMainSection: defineAsyncComponent(() =>
      import(
        "@/components/MainSection.vue" /* webpackChunkName: "main-section" */
      )
    ),
  },
};
</script>
