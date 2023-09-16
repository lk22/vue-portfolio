<script setup lang="ts">
  import FeaturedProject from '../components/Projects/FeaturedProject.vue';
  import OtherProject from '../components/Projects/OtherProject.vue';
</script>

<template>
  <section class="container">
    <div class="row">
      <h1>Featured Projects</h1>
    </div>
    <div class="row featured-projects">
      <div class="col-6">
        <FeaturedProject 
          title="Danish Xbox League"
          description="Denmark's only E-sport Gaming association for XBOX gamers, their website is built in WordPress CMS with Elementor Page Builder, they have customized modules for handling their members and events with registration system."
          image="/dxl-website.png"
          :tags="['WordPress', 'Elementor']"
          link="https://danishxboxleague.dk"
          logo="/dxl-logo.png"
        />
      </div>
      <div class="col-6">
        <!-- <FeaturedProject 
          title="Arsland Photography"
          description="Small photography website / portfolio for a small photography company who works with both photography and picture editing,
That operates all around Denmark."
          image="/arslandphotography.png"
          :tags="['WordPress', 'Elementor']"
          link="https://arslandphoto.dk"
          logo="/ap-logo.png"
        /> -->
        <FeaturedProject 
          title="VinduespudserXperten"
          description="Website design project for a danish window cleaning company,  maintaining their custom made CRM system"
          image="/vpx.png"
          :tags="['WordPress']"
          link="https://vinduespudserxperten.dk"
          logo="/vpx.png"
        />
      </div>
      <div class="col-6">
        <FeaturedProject 
          title="ServiceXperten"
          description="Company page for the danish service company “ServiceXperten” which not only do Tile service but also other type of house related services."
          image="/servicexperten.png"
          :tags="['WordPress']"
          link="https://servicexperten.dk"
          logo="/servicexperten.png"
        />
      </div>
      <div class="col-6">
        <FeaturedProject 
          title="Leo Knudsen Portfolio v2"
          description="Portfolio page to show off my projects and skills, built with Vue.js"
          image="/portfolio-leo-knudsen.png"
          :tags="['Vue.js']"
          link="https://leoknudsen.dk"
          logo="/logo.svg"
        />
      </div>
      <!-- <div class="col-6">
      </div> -->
      <div class="row other-projects">
        <h2>Other Projects</h2>
        <div class="col-12">
          <div class="row">
            <div class="col-2">
              <span class="project-label">Year</span>
            </div>
            <div class="col-2">
              <span class="project-label">Project name</span>
            </div>
            <div class="col-3">
              <span class="project-label">Built at</span>
            </div>
            <div class="col-3">
              <span class="project-label">Built with</span>
            </div>
          </div>
        </div>
        <div class="col-12">
          <OtherProject 
            year="2023"
            name="DXL Discord Bot"
            location="-"
            :technologies="['Express.js', 'Discord.js']"
            link="https://github.com/lk22/dxl-discord-bot"
          />
        </div>
        <div class="col-12">
          <OtherProject 
            year="2023"
            name="Vue.js Component Generator"
            location="-"
            :technologies="['clack.js', 'Picocolors']"
            link="https://github.com/lk22/vue-component-generator"
          />
        </div>
        <div class="col-12">
          <OtherProject 
            year="2022"
            name="DocsBot"
            location="-"
            :technologies="['Discord.js']"
            link="https://github.com/lk22/discord-docs-bot"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
  h1 {
    margin-bottom: 3rem;
  }

  .row.other-projects {
    margin-top: 2rem;
  }

  .row.other-projects .col-2 {
    padding-inline: 0;
  }

  .project-label {
    font-weight: bold;
    color: #969DD8;
  }
</style>