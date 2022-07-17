<template>
  <ToggleMode />
  <div class="text-center">
    <img class="inline-block" alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld :msg="msg" />
  </div>
</template>

<script>
import { ref } from "vue";
import HelloWorld from "./components/HelloWorld.vue";
import ToggleMode from "./components/ToggleMode.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
    ToggleMode,
  },
  setup() {
    const msg = ref("Welcome to Your Vue.js App");

    return { msg };
  },
};
</script>
