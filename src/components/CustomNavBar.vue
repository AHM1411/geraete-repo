<script setup lang="ts">
import Button from 'primevue/Button'
</script>

<template>
  <div class="p-4 flex gap-4">
    <RouterLink to="/home">
      <Button label="Home" severity="danger" />
    </RouterLink>
    <RouterLink to="/test">
      <Button label="Test" severity="success" />
    </RouterLink>
    <RouterLink to="/devices">
      <Button label="Devices" severity="warning" />
    </RouterLink>
  </div>
</template>