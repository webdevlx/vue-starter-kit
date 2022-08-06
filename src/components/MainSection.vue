<template>
  <div class="py-12 px-6 lg:p-16 lg:flex lg:items-center lg:flex-row-reverse">
    <div class="flex justify-center items-center lg:w-2/5">
      <AsyncSircleDot
        class="absolute w-56 lg:w-96 h-56 lg:h-96 blur-2xl brightness-150 dark:brightness-100"
      />
      <AsyncLogoIcon class="z-10 w-48 lg:w-80 h-48 lg:h-80" />
    </div>
    <div
      class="flex flex-col items-center lg:items-start mt-3 lg:mt-0 lg:w-3/5"
    >
      <AsyncBrandText
        class="text-3xl lg:text-5xl leading-10 lg:leading-tight"
      />
      <p
        class="text-3xl lg:text-5xl leading-10 lg:leading-tight font-bold text-center lg:text-left"
      >
        {{ $t("thePJF") }}
      </p>
      <p
        class="pt-2 lg:pt-3 text-lg lg:text-2xl leading-7 lg:leading-9 font-medium text-center lg:text-left text-zinc-500 dark:text-zinc-400"
      >
        {{ $t("aAPAVFFBWUI") }}
      </p>
      <div class="pt-6">
        <a
          class="px-5 bg-brand hover:bg-brand/75 active:bg-brand/90 duration-300 text-white text-sm lg:text-base font-medium leading-9 lg:leading-9 inline-block rounded-full border border-emerald-400"
          href="https://vuejs.org"
          target="_blank"
        >
          {{ $t("getStarted") }}
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import { defineAsyncComponent } from "vue";
export default {
  name: "MainSection",
  components: {
    AsyncBrandText: defineAsyncComponent(() =>
      import("@/components/BrandText.vue" /* webpackChunkName: "brand-text" */)
    ),
    AsyncLogoIcon: defineAsyncComponent(() =>
      import("@/icons/LogoIcon.vue" /* webpackChunkName: "logo-icon" */)
    ),
    AsyncSircleDot: defineAsyncComponent(() =>
      import("@/icons/SircleDot.vue" /* webpackChunkName: "sircle-dot" */)
    ),
  },
};
</script>
