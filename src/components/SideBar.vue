<template>
  <Transition name="slide">
    <aside
      v-if="$store.state.openSideBarMobile || width >= 1024"
      class="z-40 w-64 lg:w-16 fixed top-14 lg:top-16 bottom-0 left-0 overflow-y-auto bg-white dark:bg-neutral-900 border-r border-neutral-400 dark:border-neutral-700"
    >
      <!-- Show LogoBrand only Small Size -->
      <div class="flex lg:hidden items-center gap-4 p-4">
        <AsyncLogoBrand />
      </div>
      <div class="mt-3 flex flex-col space-y-2 px-2">
        <router-link
          class="w-full lg:w-12 lg:h-12 rounded text-xl leading-10 bg-neutral-200 dark:bg-neutral-700 flex justify-start lg:justify-center items-center pl-4 lg:pl-0"
          @click="$store.state.openSideBarMobile = false"
          to="/"
        >
          <span class="lg:hidden text-sm leading-10 font-medium">
            {{ $t("router.home") }}
          </span>
          <span class="hidden lg:block">🏠</span>
        </router-link>
        <router-link
          class="w-full lg:w-12 lg:h-12 rounded text-xl leading-10 bg-neutral-200 dark:bg-neutral-700 flex justify-start lg:justify-center items-center pl-4 lg:pl-0"
          @click="$store.state.openSideBarMobile = false"
          to="/about"
        >
          <span class="lg:hidden text-sm leading-10 font-medium">
            {{ $t("router.about") }}
          </span>
          <span class="hidden lg:block">📑</span>
        </router-link>
      </div>
    </aside>
  </Transition>
  <Transition mode="out-in">
    <div
      v-if="$store.state.openSideBarMobile"
      class="z-30 lg:hidden fixed inset-0 w-full h-full bg-neutral-200/50 dark:bg-neutral-800/50"
      @click="$store.state.openSideBarMobile = false"
      @contextmenu.prevent="$store.state.openSideBarMobile = false"
    ></div>
  </Transition>
</template>

<script>
import { useWindowSize } from "@vueuse/core";
import { defineAsyncComponent } from "vue";
export default {
  name: "SideBar",
  components: {
    AsyncLogoBrand: defineAsyncComponent(() =>
      import("@/components/LogoBrand.vue" /* webpackChunkName: "logo-brand" */)
    ),
  },
  setup() {
    const { width } = useWindowSize();

    return { width };
  },
};
</script>
