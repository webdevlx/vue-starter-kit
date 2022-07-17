<template>
  <select
    class="absolute top-4 left-4 appearance-none outline-none py-1 px-4 rounded bg-neutral-100 dark:bg-neutral-800 border border-neutral-600 dark:border-neutral-300"
    v-model="lang"
    @change="toggleLang()"
  >
    <option v-for="lang in langs" :key="lang" :value="lang.short">
      {{ lang.title }}
    </option>
  </select>
</template>

<script>
export default {
  data() {
    return {
      lang: localStorage.getItem("lang"),
      langs: [
        {
          short: "en",
          title: "English",
        },
        {
          short: "uz",
          title: "O'zbek",
        },
        {
          short: "ru",
          title: "Русский",
        },
      ],
    };
  },
  methods: {
    toggleLang() {
      this.$i18n.locale = this.lang;
      localStorage.setItem("lang", this.lang);
    },
  },
};
</script>
