<template>
  <AsyncLogoIcon class="shrink-0 w-8 h-8" />
  <AsyncBrandText class="text-black dark:text-white" />
</template>

<script>
import { defineAsyncComponent } from "vue";
export default {
  name: "LogoBrand",
  components: {
    AsyncLogoIcon: defineAsyncComponent(() =>
      import("@/icons/LogoIcon.vue" /* webpackChunkName: "logo-icon" */)
    ),
    AsyncBrandText: defineAsyncComponent(() =>
      import("@/components/BrandText.vue" /* webpackChunkName: "brand-text" */)
    ),
  },
};
</script>
