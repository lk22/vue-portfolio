<script setup lang="ts">
  import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="container">
    <div class="row">
      <div class="col-6">
        <div class="image">
          <img src="/leo.png" alt="portrait photo" />
        </div>
      </div>
      <div class="col-6">
        <div class="portrait-info">
          <h1 class="portrait-name">Leo Knudsen</h1>
          <h2>
            <span class="portrait-title">Frontend Developer at Webto ApS</span>
          </h2>
          <div class="email">
            <a href="mailto: knudsenudvikling@gmail.com">knudsenudvikling@gmail.com</a>
          </div>
          <div class="phone">
            <a href="tel: +45 27 45 94 67">+45 27 45 94 67</a>
          </div>
          <div class="social-medias">
            <ul>
              <li>
                <a href="https://www.linkedin.com/in/leo-knudsen-9b1b0a1b9/" target="_blank">
                  <img src="/linkedin.svg" alt="">
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/leo-knudsen-9b1b0a1b9/" target="_blank">
                  <img src="/facebook-square.svg" alt="">
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/leo-knudsen-9b1b0a1b9/" target="_blank">
                  <img src="/github.svg" alt="">
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="container about-section">
    <div class="row">
      <div class="col-8">
        <div class="about-me">
          <h2>About me</h2>
          <p>
            Im a 30 year old passionated gamer and Web Developer with around 10 years of experience
            Im currently working a full time possition in a Danish Digital Agency “Webto ApS” as a frontend developer, where i work with both small, medium, large scaled websites and applications, besides that im owner of Knudsen Design & Udvikling where i work part time as owner and developer.

            Im also contributing to Danish Association Life where my development skillsets are put to need
            You can read more about me and my work experience on my <router-link to="/">LinkedIn profile.</router-link>
          </p>
        </div>
      </div>
    </div>
  </div>
  <div class="container projects-section">
    <div class="row">
      
    </div>
  </div>
</template>

<style scoped>
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

  .portrait-info .social-medias {
    margin-top: 1rem;
  }

  .portrait-info a {
    text-decoration: none;
    margin-bottom: 2em;
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

  .about-section {
    margin-block: 5rem;
  }
</style>