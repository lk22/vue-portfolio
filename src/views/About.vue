<script setup lang="ts">
  import Workplace from '../components/About/Workplace.vue';
  import OtherWorkplace from '../components/About/OtherWorkplace.vue';
  import Tools from '../components/About/Tools.vue';
</script>

<template>
  <section class="container">
    <div class="row">
      <div class="col-6 about-text">
        <h1>A little about me</h1>
        <p>
          I am a full-time developer living in a town called Næstved in Denmark.
I am currently in a position at Webto ApS as Frontend Developer
Where I work with WordPress and TYPO3 websites
        </p>
        <br>
        <p>
          I trained as a Web Integrator back in 2012 at Roskilde Tekniske Skole,
between pronunciation and after graduation, I have worked in various Startups and worked as a developer in a few different TYPO3 agencies over the last 5 - 6 years
        </p>
        <br>
        <p>
          I have previously worked with frameworks such as Laravel and PHPUnit,
when I worked as a Software & Test Engineer at Athliit ApS which is now Sportyfriends.
        </p>
        <br>
        <p>
          With some experience with backend development and working with databases, I have found out that my desire is to carry out more frontend development and web design tasks.
        </p>
        <br>
        <p>
          When I get time for myself, I spend time being a gamer, taking care of family life and trying and practicing my old lifestyle as a skateboarder, which I have practiced for 12-13 years of my life.
        </p>
      </div>
      <div class="col-6 about-image">
        <img src="/leo_about.png" alt="Leo Knudsen">
      </div>
    </div>
  </section>
  <section class="container">
    <div class="row">
      <h2>Programming languages & Frameworks</h2>
      <p>Programming Languages, tools and frameworks i worked with and have gained experience with</p>
    </div>
    <Tools />
  </section>
  <section class="container">
    <h2>Developer jobs and experiences</h2>
    <div class="row">
      <div class="col-6">
        <Workplace 
          title="T3Cms ApS"
          position="Full Time Web Developer"
          description="I was hired to support and maintain current and new customers TYPO3 applications and web applications with the Extbase & Fluid framework"
          date="May 2018 - Okt 2021"
          logo="/t3cms.png"
          link="https://t3cms.dk"
        />
      </div>
      <div class="col-6">
        <Workplace 
          title="Webto ApS"
          position="Full Time Web Developer"
          description="I was hired to support and maintain current and new customers TYPO3 applications and web applications with the Extbase & Fluid framework"
          date="Okt 2021 - Present"
          logo="/webto.png"
          link="https://webto.dk"
        />
      </div>
    </div>
    <div class="row other-workplaces">
      <h2>Other developer experiences</h2>
      <OtherWorkplace 
        position="Software & Test Engineer"
        company="Athliit ApS"
        date="August 2015 - November 2016"
      />
      <OtherWorkplace 
        position="Frontend Developer"
        company="Edukarma Aps"
        date="Mar 2014 - November 2014"
      />
    </div>
  </section>
</template>

<style scoped>
  h2, h3 {
    margin-bottom: 3rem;
  }
  .about-image {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    padding-block: 5rem;
  }

  .about-image img {
    width: 50%;
  }

  .other-workplaces {
    margin-top: 2rem;
  }

  .other-workplaces h2 {
    margin-top: 2rem;
  }
</style>