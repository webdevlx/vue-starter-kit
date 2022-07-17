<template>
  <button
    class="absolute top-4 right-4"
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
