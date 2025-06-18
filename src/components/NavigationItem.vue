<template>
  <div class="w-fit">
    <router-link :to="item.path" class="flex flex-col items-center gap-2 sm:flex-row sm:items-start p-3 rounded-lg bg-white hover:bg-gray-100 transition-colors duration-200  hover: text-gray-700 hover:text-blue-600">
      <span class="material-symbols-outlined text-2xl transform transition-transform duration-200 hover:scale-110">{{ item.icon }}</span>
      <span class="font-medium text-sm sm:text-base">{{ item.label }}</span>
     </router-link>
  </div>
</template>

<script setup>
defineProps(['item']);
</script>

<style scoped lang="scss"></style>
