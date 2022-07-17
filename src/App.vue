<template>
  <ToggleLang />
  <ToggleMode />
  <div class="text-center">
    <img class="inline-block" alt="Vue logo" src="./assets/logo.png" />
    <p>{{ $t("message") }}</p>
  </div>
</template>

<script>
import ToggleLang from "./components/ToggleLang.vue";
import ToggleMode from "./components/ToggleMode.vue";

export default {
  name: "App",
  components: {
    ToggleLang,
    ToggleMode,
  },
  created() {
    this.$i18n.locale =
      localStorage.getItem("lang") || process.env.VUE_APP_I18N_LOCALE;
  },
};
</script>
