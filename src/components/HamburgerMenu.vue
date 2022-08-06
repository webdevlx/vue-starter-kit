<template>
  <button
    @click="$store.state.openSideBarMobile = !$store.state.openSideBarMobile"
    @contextmenu.prevent="
      $store.state.openSideBarMobile = !$store.state.openSideBarMobile
    "
    class="lg:hidden"
  >
    <AsyncMenuIcon class="w-6 h-6" />
  </button>
</template>

<script>
import { defineAsyncComponent } from "vue";
export default {
  name: "HamburgerMenu",
  components: {
    AsyncMenuIcon: defineAsyncComponent(() =>
      import("@/icons/MenuIcon.vue" /* webpackChunkName: "menu-icon" */)
    ),
  },
};
</script>
