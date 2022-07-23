<template>
  <button @click="toggleDark()" @contextmenu.prevent="toggleDark()">
    <Transition mode="out-in">
      <MoonIcon v-if="isDark" class="w-6 h-6" />
      <SunIcon v-else-if="!isDark" class="w-6 h-6" />
    </Transition>
  </button>
</template>

<script>
import MoonIcon from "@/icons/MoonIcon.vue";
import SunIcon from "@/icons/SunIcon.vue";
import { useDark, useToggle } from "@vueuse/core";
export default {
  name: "ToggleMode",
  components: {
    MoonIcon,
    SunIcon,
  },
  setup() {
    const isDark = useDark();
    const toggleDark = useToggle(isDark);

    return { isDark, toggleDark };
  },
};
</script>
