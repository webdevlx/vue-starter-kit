<template>
  <Transition name="slide">
    <aside
      v-if="$store.state.openSideBarMobile || width >= 1024"
      class="z-40 w-64 fixed top-14 lg:top-16 bottom-0 left-0 overflow-y-auto bg-white dark:bg-neutral-900 border-r border-neutral-400 dark:border-neutral-700"
    >
      <!-- Show LogoBrand only Small Size -->
      <div class="flex lg:hidden items-center gap-4 p-4">
        <AysncLogoBrand />
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
    AysncLogoBrand: defineAsyncComponent(() =>
      import("@/components/LogoBrand.vue" /* webpackChunkName: "logo-brand" */)
    ),
  },
  setup() {
    const { width } = useWindowSize();

    return { width };
  },
};
</script>

<style>
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.2s ease;
}

.slide-enter-from,
.slide-leave-to {
  transform: translateX(-100%);
  transition: all 150ms ease-in 0s;
}
</style>
