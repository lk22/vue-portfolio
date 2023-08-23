<script setup lang="ts">
  import FeaturedProject from '../components/Projects/FeaturedProject.vue';
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
        <FeaturedProject 
          title="Arsland Photography"
          description="Small photography website / portfolio for a small photography company who works with both photography and picture editing,
That operates all around Denmark."
          image="/arslandphotography.png"
          :tags="['WordPress', 'Elementor']"
          link="https://arslandphoto.dk"
          logo="/ap-logo.png"
        />
      </div>
      <div class="col-6">
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
    </div>
  </section>
</template>

<style scoped>
  h1 {
    margin-bottom: 3rem;
  }
</style>