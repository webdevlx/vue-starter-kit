<template>
  <AysncNavBar />
  <AysncSideBar />
  <div class="pt-14 lg:pt-16 lg:ml-64">
    <router-view />
  </div>
</template>

<script>
import { defineAsyncComponent } from "vue";
export default {
  name: "App",
  components: {
    AysncNavBar: defineAsyncComponent(() =>
      import("@/components/NavBar.vue" /* webpackChunkName: "nav-bar" */)
    ),
    AysncSideBar: defineAsyncComponent(() =>
      import("@/components/SideBar.vue" /* webpackChunkName: "side-bar" */)
    ),
  },
  created() {
    this.$i18n.locale =
      localStorage.getItem("lang") || process.env.VUE_APP_I18N_LOCALE;
  },
};
</script>
