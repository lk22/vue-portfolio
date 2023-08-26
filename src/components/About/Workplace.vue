<script setup lang="ts">
  const workplace = defineProps<{
    title: string;
    description: string;
    position: string;
    date: string;
    logo: string;
    link: string;
  }>()
</script>

<template>
  <div class="workplace">
    <div class="row">
      <div class="workplace-header">
        <div class="workplace-title">
          <h3>{{ workplace.title }}</h3>
        </div>
        <div class="workplace-logo">
          <img :src="workplace.logo" alt="company logo">
        </div>
      </div>
      <div class="col-12">
        <div class="workplace-position">
          <p>{{ workplace.position }}</p>
        </div>
        <div class="workplace-date">
          <p>{{ workplace.date }}</p>
        </div>
        <p class="workplace-description">{{ workplace.description }}</p>
        <div class="workplace-link">
          <a :href="workplace.link" target="_blank">Visit workplace</a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

  [class^="col-"] {
    padding: 0;
  }

  .workplace-header {
    display: flex;
    justify-content: space-between;
    width: 92%;
    padding-right: 2rem;
  }

  .workplace-position,
  .workplace-title h3,
  .workplace-date {
    font-weight: bold;
  }
  .workplace-description {
    margin-block: 1rem 2rem;
    padding-inline: 0rem 5rem;
  }

  img {
    width: auto;
  }
</style>