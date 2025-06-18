<template>
  <nav class="h-16 flex 10/12 m-auto items-center">
    <div id="nav-item" class="flex items-center w-10/12 m-auto gap-10">
      <navigation-item v-for="item in navItems" :key="item.label"  :item="item"
      :to="item.path" />
    </div>
  </nav>
</template>

<script setup>
import NavigationItem from './NavigationItem.vue';
import { ref } from 'vue';

const navItems = ref([
  { label: "Home", path: "/", icon: "home" },
  { label: "About", path: "/about", icon: "info" },
  { label: "Contact", path: "/contact", icon: "chat" },
]);
</script>

<style scoped lang="scss"></style>
