<template>
  <button @click="toggleShowLangs()" @contextmenu.prevent="toggleShowLangs()">
    <LangIcon class="w-6 h-6" />
  </button>
  <Transition mode="out-in">
    <div
      v-if="isShowLangs"
      class="absolute top-12 right-14 lg:top-14 rounded p-1 border border-neutral-400 dark:border-neutral-700 bg-neutral-200 dark:bg-neutral-800 flex flex-col gap-1 z-50"
    >
      <button
        class="px-4 bg-white dark:bg-neutral-900 rounded border border-neutral-400 dark:border-neutral-700 hover:bg-neutral-200 dark:hover:bg-neutral-800 duration-300"
        @click="toggleLang(lang.short)"
        @contextmenu.prevent="toggleLang(lang.short)"
        v-for="lang in langs"
        :key="lang"
      >
        {{ lang.title }}
      </button>
    </div>
  </Transition>
  <div
    @click="toggleShowLangs()"
    @contextmenu.prevent="toggleShowLangs()"
    v-if="isShowLangs"
    class="absolute inset-0 z-40"
  ></div>
</template>

<script>
import LangIcon from "@/icons/LangIcon.vue";
export default {
  name: "ToggleLang",
  components: {
    LangIcon,
  },
  data() {
    return {
      isShowLangs: false,
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
    toggleShowLangs() {
      this.isShowLangs = !this.isShowLangs;
    },
    toggleLang(lang) {
      this.$i18n.locale = lang;
      localStorage.setItem("lang", lang);
      this.toggleShowLangs();
    },
  },
};
</script>
