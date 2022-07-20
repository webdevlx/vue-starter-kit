<template>
  <nav
    class="h-14 lg:h-16 bg-neutral-200 dark:bg-neutral-800 px-4 flex justify-between items-center border-b border-neutral-400 dark:border-neutral-700"
  >
    <HamburgerMenu />
    <div class="hidden lg:flex items-center gap-4">
      <LogoBrand />
    </div>
    <div class="flex items-center gap-4">
      <ToggleLang />
      <ToggleMode />
    </div>
  </nav>
</template>

<script>
import HamburgerMenu from "@/components/HamburgerMenu.vue";
import LogoBrand from "@/components/LogoBrand.vue";
import ToggleLang from "@/components/ToggleLang.vue";
import ToggleMode from "@/components/ToggleMode.vue";
export default {
  name: "NavBar",
  components: {
    HamburgerMenu,
    LogoBrand,
    ToggleLang,
    ToggleMode,
  },
};
</script>
