<template>
  <button
    class="absolute top-4 right-4 py-1 px-4 rounded bg-neutral-100 dark:bg-neutral-800 border border-neutral-600 dark:border-neutral-300"
    @click="toggleDark()"
    @contextmenu.prevent="toggleDark()"
  >
    {{ isDark ? "Dark" : "Light" }}
  </button>
</template>

<script setup>
import { useDark, useToggle } from "@vueuse/core";

const isDark = useDark();
const toggleDark = useToggle(isDark);
</script>
