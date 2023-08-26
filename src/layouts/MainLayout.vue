<template>
  <Header />
  <main>
    <slot />
    <SocialMedia />
    <ContactInformation />
  </main>
  <Footer />
</template>

<script setup lang="ts">
  import Header from '../components/Base/Header.vue'
  import Footer from '../components/Base/Footer.vue'
  import SocialMedia from '../components/Layout/SocialMedia.vue';
  import ContactInformation from '../components/Layout/ContactInformation.vue'
</script>