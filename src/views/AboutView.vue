<template>
  <div>
    <div class="lg:py-6 lg:px-20 lg:gap-20 lg:flex lg:items-start">
      <div class="p-6 lg:p-0 lg:w-1/2 lg:sticky lg:top-24">
        <h2 class="text-xl leading-6 font-medium">
          {{ $t("coreTeamMembers") }}
        </h2>
        <p
          class="pt-2 text-sm leading-6 font-medium text-zinc-500 dark:text-zinc-400"
        >
          {{ $t("aboutCoreTeamMembers") }}
        </p>
      </div>
      <div class="lg:w-1/2 space-y-2">
        <AsyncTeamMember
          v-for="member in members"
          :key="member"
          :member="member"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { defineAsyncComponent } from "vue";
export default {
  name: "AboutView",
  components: {
    AsyncTeamMember: defineAsyncComponent(() =>
      import(
        "@/components/TeamMember.vue" /* webpackChunkName: "team-member" */
      )
    ),
  },
  data() {
    return {
      members: [
        {
          image: "https://www.github.com/yyx990803.png",
          name: "Evan You",
          sponsor: "https://github.com/sponsors/yyx990803",
          position: "Creator",
          haveProject: true,
          projectName: "Vue.js",
        },
        {
          image: "https://www.github.com/posva.png",
          name: "Eduardo",
          sponsor: "https://github.com/sponsors/posva",
          position: "Developer & Consultant",
          haveProject: true,
          projectName: "Freelance",
        },
        {
          image: "https://www.github.com/kiaking.png",
          name: "Kia King Ishii",
          sponsor: "https://github.com/sponsors/kiaking",
          position: "Director",
          haveProject: true,
          projectName: "Global Brain",
        },
        {
          image: "https://www.github.com/antfu.png",
          name: "Anthony Fu",
          sponsor: "https://github.com/sponsors/antfu",
          position: "Open Sourceror",
          haveProject: false,
          projectName: "",
        },
      ],
    };
  },
};
</script>
