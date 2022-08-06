<template>
  <div class="bg-neutral-100 dark:bg-neutral-800 rounded">
    <div class="relative p-8 pb-0 flex justify-between">
      <img
        class="w-24 h-24 rounded-full"
        :src="member.image"
        :alt="`${member.name}'s Profile Picture`"
      />
      <a
        class="absolute top-4 right-4 flex items-center border border-pink-500 py-1 px-2 rounded text-xs leading-6 font-medium"
        :href="member.sponsor"
        target="_blank"
      >
        <AsyncLoveIcon class="w-4 h-4 mr-2 text-pink-500" />
        <span class="text-pink-500">{{ $t("sponsor") }}</span>
      </a>
    </div>
    <div class="p-8 pt-5">
      <h1 class="text-xl leading-6 font-medium">{{ member.name }}</h1>
      <p
        class="pt-1 text-sm leading-5 font-medium text-zinc-500 dark:text-zinc-400"
      >
        {{ member.position }}
        <span v-if="member.haveProject">
          @
          <span class="text-neutral-900 dark:text-white">
            {{ member.projectName }}
          </span>
        </span>
      </p>
    </div>
  </div>
</template>

<script>
import { defineAsyncComponent } from "vue";
export default {
  props: {
    member: {
      type: Object,
      required: true,
    },
  },
  name: "TeamMember",
  components: {
    AsyncLoveIcon: defineAsyncComponent(() =>
      import("@/icons/LoveIcon.vue" /* webpackChunkName: "love-icon" */)
    ),
  },
};
</script>
