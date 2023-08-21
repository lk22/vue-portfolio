<template>
  <div class="col-6">
    <nav>
      <ul>
        <li v-for="link in links" :key="link.name">
          <router-link :to="link.path">{{ link.name }}</router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script setup lang="ts">
  import { RouterLink } from 'vue-router'
  import { reactive } from 'vue'

  type Link = {
    name: string;
    path: string;
  }

  const links = reactive<Link[]>([
    {
      name: 'Home',
      path: '/'
    },
    {
      name: 'Projects',
      path: '/projects'
    }
  ]);

</script>