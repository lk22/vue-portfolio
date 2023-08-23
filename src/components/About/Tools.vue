<script setup lang="ts">
import { reactive } from 'vue'

  type Category = {
    category: string;
    toolList: string[];
  }

  const state = reactive<Category[]>([
    {
      category: 'Languages',
      toolList: ['HTML', 'CSS3', 'JavaScript', 'PHP', 'TypeScript']
    },
    {
      category: 'Content Management Systems',
      toolList: ['WordPress', 'TYPO3']
    },
    {
      category: 'Tools & Frameworks',
      toolList: ['Laravel', 'Scss', 'Tailwind CSS', 'Bootstrap UI', 'Vue.js', 'React.js', 'Astro.js']
    },
    {
      category: 'UI & UX Tools',
      toolList: ['Affinity Designer', 'Figma']
    }
  ])
</script>

<template>
  <div class="row tool-languages">
    <div class="col-3 tool-column" v-for="toolList in state">
      <p class="category">{{ toolList.category }}</p>
      <nav>
        <ul>
          <li v-for="tool in toolList.toolList">
            <span>{{ tool }}</span>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<style scoped>

  .col-3 {
    position: relative;
  }

  .col-3:after {
    content: "";
    position: absolute;
    right: 15px;
    top: 0;
    height: 100%;
    width: 3px;
    background: linear-gradient(360deg, rgba(255,255,255,0.3) -20%, transparent 90%);
    border-radius: 100px;
  }

  .tool-languages {
    position: relative;
    margin-top: 1.5rem;
  }

  .tool-languages::before {
    content: "";
    position: absolute;
    left: -180px;
    top: -250px;
    background-image: url(/public/purple_graphic.png);
    height: 630px;
    width: 650px;
    background-repeat: no-repeat;
  }

  .category {
    margin-bottom: 1rem;
    color: #969DD8;
    font-weight: 700;
  }

  ul li {
    list-style: none;
    position: relative;
    padding-left: 20px;
    margin-bottom: 0.5rem;
  }

  ul li:before {
    content: "";
    position: absolute;
    height: 15px; 
    width: 15px;
    background: linear-gradient(320deg, rgba(255,255,255,0.5) 40%, #969DD850 100%);
    left: 0px;
    top: 5px;
    border-radius: 100px;
  }
</style>