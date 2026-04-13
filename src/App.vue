<script setup lang="ts">
import CustomNavBar from './components/CustomNavBar.vue';
</script>

<template>
  <div class="min-h-screen">
    <CustomNavBar />
    <RouterView />
  </div>
</template>
