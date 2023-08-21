<script setup lang="ts">
  type Project = {
    title: string;
    description: string;
    image: string;
    tags: string[];
    link: string;
  }

  type ProjectProps = {
    project: Project;
  }

  defineProps<ProjectProps>();
</script>
<template>
  <div class="project featured">
    <div class="project-background" :style={backgroundImage: url(project.image)}></div>
      <div class="project-information">
        <h2>{{ project.title }}</h2>
        <p>{{ project.description }}</p>
        <div class="project-tags">
          <ul>
            <li v-for="tag in project.tags" :key="tag">
              {{ tag }}
            </li>
          </ul>
        <div class="project-link">
          <a :href="project.link" target="_blank">Visit project</a>
        </div>
      </div>
    </div>
  </div>
</template>