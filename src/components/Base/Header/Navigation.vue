<script setup lang="ts">
  import { RouterLink } from 'vue-router'
  import { reactive } from 'vue'

  type Link = {
    name: string;
    path: string;
  }

  const links = reactive<Link[]>([
    {
      name: 'About',
      path: '/about'
    },
    {
      name: 'Projects',
      path: '/projects'
    }
  ]);
</script>

<template>
  <div class="navigation">
    <nav>
      <ul>
        <li v-for="link in links" :key="link.name">
          <router-link :to="link.path">{{ link.name }}</router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<style scoped>
  nav ul {
    display: flex;
    justify-content: flex-end;
  }

  nav ul li {
    list-style: none;
    margin-left: 2em;
  }

  nav ul li a {
    text-decoration: none;
    color: #f9f9f9;
  }

  @media (min-width: 576px) {
    .navigation {
      width: 50%;
    }
  }

</style>