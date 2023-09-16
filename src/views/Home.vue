<script setup lang="ts">
  import { RouterLink } from 'vue-router'
  import FeaturedProject from '../components/Projects/FeaturedProject.vue';
</script>

<template>
  <section class="container">
    <div class="row">
      <div class="col-6">
        <div class="portrait-image">
          <img src="/leo.png" alt="portrait photo" />
        </div>
      </div>
      <div class="col-6">
        <div class="portrait-info">
          <h1 class="portrait-name">Leo Knudsen</h1>
          <p class="portrait-position">
            <span class="portrait-title">Frontend Developer at Webto ApS</span>
          </p>
        </div>
      </div>
    </div>
  </section>
  <section class="container about-section">
    <div class="row">
      <div class="col-8">
        <div class="about-me">
          <h2>About me</h2>
          <p>
            Im a 30 year old passionated gamer and Web Developer with around 10 years of experience
            Im currently working a full time possition in a Danish Digital Agency “Webto ApS” as a frontend developer, where i work with both small, medium, large scaled websites and applications, besides that im owner of Knudsen Design & Udvikling where i work part time as owner and developer.

            Im also contributing to Danish Association Life where my development skillsets are put to need
            You can read more about me and my work experience on my <a target="_blank" href="https://www.linkedin.com/in/leo-knudsen-21b6a19a/">LinkedIn profile.</a>
          </p>
        </div>
      </div>
    </div>
  </section>
  <section class="container projects-section">
    <div class="row">
      <div class="col-12">
        <h2>Featured Projects</h2>
      </div>
      <div class="col-6">
        <FeaturedProject 
          title="Danish Xbox League"
          description="Denmark's only E-sport Gaming association for XBOX gamers, their website is built in WordPress CMS with Elementor Page Builder, they have customized modules for handling their members and events with registration system."
          image="/dxl-website.png"
          :tags="['WordPress', 'Elementor', 'PHP']"
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
          :tags="['WordPress', 'Elementor', 'PHP']"
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
      <div class="col-12 go-to-archive">
        <router-link to="/projects">
          Go to project archive
        </router-link>
      </div>
    </div>
  </section>
  
</template>

<style scoped>

@keyframes fadeIn {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0px);
  }
}

  .portrait-image,
  .portrait-position,
  .portrait-name,
  .email,
  .phone,
  .social-medias {
    opacity: 0;
    animation: fadeIn 0.5s ease-in-out forwards;
  }

  .portrait-image {
    transform: translateY(20px);
    animation-delay: 0.8s;
  }

  .portrait-position {
    transform: translateY(20px);
    animation-delay: 0.6s;
  }

  .portrait-name {
    transform: translateY(20px);
    animation-delay: 0.4s;
  }

  .email {
    transform: translateY(20px);
    animation-delay: 0.8s;
  }

  .phone {
    transform: translateY(20px);
    animation-delay: 1s;
  }

  .social-medias {
    transform: translateY(20px);
    animation-delay: 1.2s;
  }
  .portrait-info {
    height: 100%;
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
  }

  .portrait-info h1 {
    margin-bottom: 0rem;
  }

  .portrait-info h2 {
    margin-bottom: 1rem;
  }

  .portrait-position {
    font-size: 28px;
  }

  .portrait-info .social-medias {
    margin-top: 1rem;
  }

  .portrait-info a {
    text-decoration: none;
    margin-bottom: 2em;
  }

  .portrait-info .email {
    margin-bottom: 0.5rem;
  }

  .portrait-info .social-medias ul {
    display: flex;
    flex-flow: row wrap;
    align-items: center;
  }

  .portrait-info .social-medias ul li {
    margin-right: 1rem;
    list-style: none;
  }

  .portrait-info .social-medias ul li a {
    text-decoration: none;
    margin-bottom: 1rem;
  }

  .portrait-info .social-medias ul li img {
    width: 2rem;
    height: 2rem;
    transition: cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.3s;
  }

  .portrait-info .social-medias ul li img:hover {
    opacity: 0.5;
  }

  .go-to-archive {
    margin-top: 0rem;
  }
</style>