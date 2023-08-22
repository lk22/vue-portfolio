<template>
  <header>
    <div class="container">
      <div class="row">
        <Logo />
        <Navigation />
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
  import Logo from './Header/Logo.vue'
  import Navigation from './Header/Navigation.vue'
</script>

<style scoped>
  header {
    padding: 1rem 0;
    position: sticky;
    top: 0;
    width: 100%;
    backdrop-filter: blur(10px);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  }

  .row {
    align-items: center;
  }
</style>