<template>
  <div class="absolute -top-2 -right-2 w-40 h-40 rounded overflow-hidden">
    <span
      class="absolute -top-1 left-0 w-3 h-3 bg-emerald-700 dark:bg-emerald-500"
    ></span>
    <span
      class="absolute bottom-0 -right-1 w-3 h-3 bg-emerald-700 dark:bg-emerald-500"
    ></span>
    <div
      class="absolute w-60 h-14 bg-emerald-500 dark:bg-emerald-700 rotate-45 top-8 -left-5 flex flex-col justify-center items-center"
    >
      <h4 class="text-2xs leading-4">{{ $t("coreTeamMembers") }}</h4>
      <h2 class="text-lg leading-5 font-bold tracking-widest">Vue.js</h2>
    </div>
  </div>
</template>
