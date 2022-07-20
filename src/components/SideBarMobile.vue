<template>
  <Transition name="slide">
    <aside
      v-if="$store.state.openSideBarMobile"
      class="lg:hidden w-64 h-screen z-50 fixed top-0 bg-white dark:bg-neutral-900"
    >
      <div class="flex items-center gap-4 p-4">
        <LogoBrand />
      </div>
    </aside>
  </Transition>
  <Transition name="fade">
    <div
      v-if="$store.state.openSideBarMobile"
      class="lg:hidden absolute inset-0 bg-neutral-200/90 dark:bg-neutral-800/90"
      @click="$store.state.openSideBarMobile = false"
      @contextmenu.prevent="$store.state.openSideBarMobile = false"
    ></div>
  </Transition>
</template>

<script>
import LogoBrand from "@/components/LogoBrand.vue";
export default {
  components: {
    LogoBrand,
  },
};
</script>

<style scoped>
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.2s ease;
}

.slide-enter-from,
.slide-leave-to {
  transform: translateX(-100%);
  transition: all 150ms ease-in 0s;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
