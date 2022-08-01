<template>
  <nav
    class="z-50 h-14 lg:h-16 fixed top-0 right-0 left-0 bg-neutral-200 dark:bg-neutral-800 px-4 flex justify-between items-center border-b border-neutral-400 dark:border-neutral-700"
  >
    <AysncHamburgerMenu />
    <div class="hidden lg:flex items-center gap-4">
      <AysncLogoBrand />
    </div>
    <div class="flex items-center gap-4">
      <AysncToggleLang />
      <AysncToggleMode />
    </div>
  </nav>
</template>

<script>
import { defineAsyncComponent } from "vue";
export default {
  name: "NavBar",
  components: {
    AysncHamburgerMenu: defineAsyncComponent(() =>
      import(
        "@/components/HamburgerMenu.vue" /* webpackChunkName: "hamburger-menu" */
      )
    ),
    AysncLogoBrand: defineAsyncComponent(() =>
      import("@/components/LogoBrand.vue" /* webpackChunkName: "logo-brand" */)
    ),
    AysncToggleLang: defineAsyncComponent(() =>
      import(
        "@/components/ToggleLang.vue" /* webpackChunkName: "toggle-lang" */
      )
    ),
    AysncToggleMode: defineAsyncComponent(() =>
      import(
        "@/components/ToggleMode.vue" /* webpackChunkName: "toggle-mode" */
      )
    ),
  },
};
</script>
