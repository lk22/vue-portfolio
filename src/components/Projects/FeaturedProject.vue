<script setup lang="ts">

  const project = defineProps([
    'title', 
    'description', 
    'image', 
    'tags', 
    'link',
    'logo'
  ]);

</script>

<template>
  <div class="project featured">
    <div class="project-background"></div>
      <div class="project-information">
        <h3>
          {{ project.title }}
          <hr>
        </h3>
        <p class="project-description">{{ project.description }}</p>
        <div class="project-tags">
          <ul>
            <li v-for="tag in project.tags" :key="tag">
              {{ tag }}
            </li>
          </ul>
        </div>
        <div class="project-link">
          <a :href="project.link" target="_blank">Visit project</a>
        </div>
        <div class="project-logo">
          <img :src="project.logo" alt="Project logo">  
        </div>
      </div>
    </div>
</template>

<style scoped>
  ul li {
    list-style: none;
  }

  hr {
    height: 3px;
    background-color: #969DD8;
    border-radius: 100px;
    border: none;
  }

  h3 {
    /** border length */
    width: fit-content;
    margin-bottom: 0.5rem;
    padding-bottom: 1rem;
  }

  .project {
    display: flex;
    position: relative;
    align-items: flex-start;
    -webkit-border-radius: 20px;
    border-radius: 20px;
    background: #171f2b;
    -webkit-box-shadow: 5px 5px 10px 0px #000, -5px -5px 10px 0px #000000;
    box-shadow: 5px 5px 10px 0px rgba(0,0,0,0.25), -5px -5px 10px 0px rgba(0,0,0,0.25);
    padding: 2rem;
    min-height: 380px;
    transition: cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.3s;
    margin-bottom: 3rem;
  }

  .project-description {
    margin-bottom: 1rem;
    padding-right: 3rem;
  }

  .project-tags {
    margin-bottom: 1rem;
  }

  .project-tags ul {
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    gap: 10px;
  }

  .project-tags ul li {
    padding: 0.25rem 1rem;
    border: 3px solid #969DD8;
    border-radius: 10px;
    font-size: 12px;
  }

  .project-link {
    position: absolute;
    bottom: 30px;
    left: 35px;
  }

  .project-logo {
    position: absolute;
    right: 50px;
    bottom: -30px;
  }

  .project-logo img {
    height: 75px;
    width: 100%;
  }

  .project:hover {
    background-color: #1e2a3a;
  }
</style>