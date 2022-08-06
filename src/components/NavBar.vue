<template>
  <nav
    class="z-50 h-14 lg:h-16 fixed top-0 right-0 left-0 bg-white dark:bg-neutral-900 px-4 flex justify-between items-center border-b border-neutral-400 dark:border-neutral-700"
  >
    <AsyncHamburgerMenu />
    <div class="hidden lg:flex items-center gap-4">
      <AsyncLogoBrand />
    </div>
    <div class="flex items-center gap-4">
      <AsyncToggleMode />
      <AsyncToggleLang />
    </div>
  </nav>
</template>

<script>
import { defineAsyncComponent } from "vue";
export default {
  name: "NavBar",
  components: {
    AsyncHamburgerMenu: defineAsyncComponent(() =>
      import(
        "@/components/HamburgerMenu.vue" /* webpackChunkName: "hamburger-menu" */
      )
    ),
    AsyncLogoBrand: defineAsyncComponent(() =>
      import("@/components/LogoBrand.vue" /* webpackChunkName: "logo-brand" */)
    ),
    AsyncToggleLang: defineAsyncComponent(() =>
      import(
        "@/components/ToggleLang.vue" /* webpackChunkName: "toggle-lang" */
      )
    ),
    AsyncToggleMode: defineAsyncComponent(() =>
      import(
        "@/components/ToggleMode.vue" /* webpackChunkName: "toggle-mode" */
      )
    ),
  },
};
</script>
