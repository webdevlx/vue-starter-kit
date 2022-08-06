<template>
  <button @click="toggleDark()" @contextmenu.prevent="toggleDark()">
    <Transition mode="out-in">
      <AsyncMoonIcon v-if="isDark" class="w-6 h-6" />
      <AsyncSunIcon v-else-if="!isDark" class="w-6 h-6" />
    </Transition>
  </button>
</template>

<script>
import { useDark, useToggle } from "@vueuse/core";
import { defineAsyncComponent } from "vue";
export default {
  name: "ToggleMode",
  components: {
    AsyncMoonIcon: defineAsyncComponent(() =>
      import("@/icons/MoonIcon.vue" /* webpackChunkName: "moon-icon" */)
    ),
    AsyncSunIcon: defineAsyncComponent(() =>
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
