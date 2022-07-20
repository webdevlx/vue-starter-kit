<template>
  <button
    @click="$store.state.openSideBarMobile = true"
    @contextmenu.prevent="$store.state.openSideBarMobile = true"
    class="lg:hidden"
  >
    <MenuIcon class="w-6 h-6" />
  </button>
</template>

<script>
import MenuIcon from "@/icons/MenuIcon.vue";
export default {
  components: {
    MenuIcon,
  },
};
</script>
