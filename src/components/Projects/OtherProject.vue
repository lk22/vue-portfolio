<script setup lang="ts">
  const project = defineProps<{
    year: string;
    name: string;
    location: string;
    technologies: string[];
    link: string;
  }>()
</script>

<template>
  <div class="project">
    <div class="row">
      <div class="col-2">
        <div class="project-year">
          <p>{{ project.year }}</p>
        </div>
      </div>
      <div class="col-2">
        <div class="project-name">
          <p>{{ project.name }}</p>
        </div>
      </div>
      <div class="col-2">
        <div class="project-location">
          <p>{{ project.location }}</p>
        </div>
      </div>
      <div class="col-2">
        <div class="project-technologies">
          <ul>
            <li v-for="technology in project.technologies" :key="technology">
              {{ technology }}
            </li>
          </ul>
        </div>
      </div>
      <div class="col-4">
        <div class="project-link">
          <a :href="project.link" target="_blank">Link</a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .project {
    margin-block: 2em 1em;
    width: 100%;
    border-bottom: 2px solid #f9f9f9;
    font-weight: 600;
  }

  ul {
    display: flex;
    flex-flow: row wrap;
    gap: 10px;
  }

  li {
    list-style: none;
  }

  .project [class*="col-"] {
    padding-inline: 0;
  }

  .project-link {
    text-align: right;
  }

  .project-link a {
    text-decoration: none;
    color: #f9f9f9;
  }
</style>