<template>
  <button @click="toggleDark()" @contextmenu.prevent="toggleDark()">
    <Transition mode="out-in">
      <AysncMoonIcon v-if="isDark" class="w-6 h-6" />
      <AysncSunIcon v-else-if="!isDark" class="w-6 h-6" />
    </Transition>
  </button>
</template>

<script>
import { useDark, useToggle } from "@vueuse/core";
import { defineAsyncComponent } from "vue";
export default {
  name: "ToggleMode",
  components: {
    AysncMoonIcon: defineAsyncComponent(() =>
      import("@/icons/MoonIcon.vue" /* webpackChunkName: "moon-icon" */)
    ),
    AysncSunIcon: defineAsyncComponent(() =>
      import("@/icons/SunIcon.vue" /* webpackChunkName: "sun-icon" */)
    ),
  },
  setup() {
    const isDark = useDark();
    const toggleDark = useToggle(isDark);

    return { isDark, toggleDark };
  },
};
</script>
