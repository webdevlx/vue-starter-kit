<template>
  <AsyncNavBar />
  <AsyncSideBar />
  <div class="pt-14 lg:pt-16 lg:ml-16">
    <router-view v-slot="{ Component }">
      <Transition name="page" mode="out-in">
        <component :is="Component"></component>
      </Transition>
    </router-view>
  </div>
</template>

<script>
import { defineAsyncComponent } from "vue";
export default {
  name: "App",
  components: {
    AsyncNavBar: defineAsyncComponent(() =>
      import("@/components/NavBar.vue" /* webpackChunkName: "nav-bar" */)
    ),
    AsyncSideBar: defineAsyncComponent(() =>
      import("@/components/SideBar.vue" /* webpackChunkName: "side-bar" */)
    ),
  },
  created() {
    this.$i18n.locale =
      localStorage.getItem("lang") || process.env.VUE_APP_I18N_LOCALE;
  },
};
</script>
