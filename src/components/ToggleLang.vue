<template>
  <button @click="toggleShowLangs()" @contextmenu.prevent="toggleShowLangs()">
    <AysncLangIcon class="w-6 h-6" />
  </button>
  <Transition mode="out-in">
    <div
      v-if="isShowLangs"
      class="z-50 fixed top-12 right-14 lg:top-14 w-48 rounded-lg flex flex-col shadow shadow-neutral-900 dark:shadow-white overflow-hidden"
    >
      <div
        class="h-8 flex items-center pl-3 bg-neutral-200 dark:bg-neutral-800 font-bold border-b border-neutral-400 dark:border-neutral-700"
      >
        {{ $t("language") }}
      </div>
      <button
        class="flex justify-between items-center h-8 bg-white dark:bg-neutral-900 hover:bg-neutral-200 dark:hover:bg-neutral-800 duration-300 text-left pl-3 pr-1"
        :class="{
          'bg-green-200 dark:bg-green-900': $i18n.locale === lang.short,
        }"
        @click="toggleLang(lang.short)"
        @contextmenu.prevent="toggleLang(lang.short)"
        v-for="lang in langs"
        :key="lang"
      >
        <span>{{ lang.title }}</span>
        <AysncVerifyIcon v-if="$i18n.locale === lang.short" class="w-6 h-6" />
      </button>
    </div>
  </Transition>
  <Transition mode="out-in">
    <div
      @click="toggleShowLangs()"
      @contextmenu.prevent="toggleShowLangs()"
      v-if="isShowLangs"
      class="fixed inset-0 z-40 w-full h-full bg-neutral-200/50 dark:bg-neutral-800/50"
    ></div>
  </Transition>
</template>

<script>
import { defineAsyncComponent } from "vue";
export default {
  name: "ToggleLang",
  components: {
    AysncLangIcon: defineAsyncComponent(() =>
      import("@/icons/LangIcon.vue" /* webpackChunkName: "lang-icon" */)
    ),
    AysncVerifyIcon: defineAsyncComponent(() =>
      import("@/icons/VerifyIcon.vue" /* webpackChunkName: "verify-icon" */)
    ),
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
