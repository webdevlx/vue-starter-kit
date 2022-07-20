<template>
  <button @click="toggleDark()" @contextmenu.prevent="toggleDark()">
    <MoonIcon class="w-6 h-6" v-if="isDark" />
    <SunIcon class="w-6 h-6" v-else />
  </button>
</template>

<script setup>
import MoonIcon from "@/icons/MoonIcon.vue";
import SunIcon from "@/icons/SunIcon.vue";
import { useDark, useToggle } from "@vueuse/core";

const isDark = useDark();
const toggleDark = useToggle(isDark);
</script>
