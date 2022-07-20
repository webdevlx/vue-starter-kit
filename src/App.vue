<template>
  <NavBar />
  <SideBarMobile />
  <div class="p-2 lg:p-4">
    <router-view />
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import SideBarMobile from "@/components/SideBarMobile.vue";
export default {
  name: "App",
  components: {
    NavBar,
    SideBarMobile,
  },
  created() {
    this.$i18n.locale =
      localStorage.getItem("lang") || process.env.VUE_APP_I18N_LOCALE;
  },
};
</script>
