<template>
  <div class="logo">
    <router-link to="/">
      <img src="/logo.svg" alt="Logo" />
    </router-link>
  </div>
</template>

<script setup lang="ts">
  import {RouterLink} from 'vue-router'
</script>

<style scoped>
.logo img {
  height: 2rem;
}

@media (min-width: 576px) {
  .logo {
    width: auto;
  }
}

</style>