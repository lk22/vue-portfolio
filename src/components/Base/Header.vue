<template>
  <header>
    <div class="container">
      <div class="row">
        <div class="col-6">
          <router-link to="/">
            <img src="/assets/logo.svg" alt="Logo" />
          </router-link>
        </div>
        <div class="col-6">
          <navigation />
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
  import { RouterLink } from 'vue-router'
</script>