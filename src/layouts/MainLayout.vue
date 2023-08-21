<template>
  <Header />
  <main>
    <slot />
  </main>
  <Footer />
</template>

<script setup lang="ts">
  import Header from '../components/Base/Header.vue'
  import Footer from '../components/Base/Footer.vue'
</script>