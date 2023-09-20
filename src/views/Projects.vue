<script setup lang="ts">
import FeaturedProject from '../components/Projects/FeaturedProject.vue';
  import OtherProject from '../components/Projects/OtherProject.vue';

  import { reactive } from 'vue';

  type FeaturedProject = {
    title: string;
    description: string;
    image: string;
    tags: string[];
    link: string;
    logo: string;
    position?: string;
    workplace?: string; 
  }

  type OtherProject = {
    year: string;
    name: string;
    location: string;
    technologies: string[];
    link: string;
  }

  const featuredPropects = reactive<FeaturedProject[]>([
    {
      title: "Danish Xbox League",
      description: "Denmark's only E-sport Gaming association for XBOX gamers, their website is built in WordPress CMS with Elementor Page Builder, they have customized modules for handling their members and events with registration system.",
      image: "/dxl-website.png",
      tags: ["WordPress", "Elementor"],
      link: "https://danishxboxleague.dk",
      logo: "/dxl-logo.png"
    },
    {
      title: "VinduespudserXperten",
      description: "Website design project for a danish window cleaning company,  maintaining their custom made CRM system",
      image: "/vpx.png",
      tags: ["WordPress"],
      link: "https://vinduespudserxperten.dk",
      logo: "/vpx.png"
    },
    {
      title: "ServiceXperten",
      description: "Company page for the danish service company “ServiceXperten” which not only do Tile service but also other type of house related services.",
      image: "/servicexperten.png",
      tags: ["WordPress"],
      link: "https://servicexperten.dk",
      logo: "/servicexperten.png"
    },
    {
      title: "Leo Knudsen Portfolio v2",
      description: "Portfolio page to show off my projects and skills, built with Vue.js",
      image: "/portfolio-leo-knudsen.png",
      tags: ["Vue.js"],
      link: "https://leoknudsen.dk",
      logo: "/logo.svg"
    },
    {
      title: "Citrus Media",
      description: "Citrus Media is a danish media company, that offers media solutions for outdoor purposes like banners and signs or even on buildings. I worked on this project in my position as a Frontend Developer at Webto ApS.",
      image: "/citrus-media.png",
      tags: ["WordPress", "Elementor", "Bootstrap", "Google Maps API", "Webto"],
      link: "https://citrusmedia.dk",
      logo: "",
      position: "Frontend Developer",
      workplace: "Webto ApS"
    },
    {
      title: "klimacomfort.dk",
      description: "Klimacomfort is a danish company that offers solutions for heating and cooling in your home. I worked on this project in my position as a Frontend Developer at Webto ApS.",
      image: "/klimacomfort.png",
      tags: ["TYPO3", "Scss", "Bootstrap", "Webto"],
      link: "https://klimacomfort.dk",
      logo: "",
      position: "Frontend Developer",
      workplace: "Webto ApS"
    },
    {
      title: "Sorø Privatskole",
      description: "Sorø Privatskole is a danish private school, that also offers SFO and club for young stduents on the school, I worked on this project in my position as a Frontend Developer at Webto ApS.",
      image: "/soroe-privatskole.png",
      tags: ["TYPO3", "Scss", "Bootstrap", "Webto"],
      link: "https://sprs.dk",
      logo: "",
      position: "Frontend Developer",
      workplace: "Webto ApS"
    },
    {
      title: "Winter Fiberteknik",
      description: "Winter Fiberteknik is a danish company that offers solutions for fiber downgraving and other solutions, I worked on this project in my position as a Frontend Developer at Webto ApS.",
      image: "/winter-fiberteknik.png",
      tags: ["TYPO3", "Scss", "Bootstrap", "Webto"],
      link: "https://winther-fiberteknik.dk",
      logo: "",
      position: "Frontend Developer",
      workplace: "Webto ApS"
    },
    {
      title: "Meiland Inspire ApS",
      description: "Meiland Inspire ApS is a small danish firm that delivers text writing and other services, I worked on this project in my position as a Frontend Developer at Webto ApS.",
      image: "/meiland-inspire.png",
      tags: ["TYPO3", "Scss", "Bootstrap", "Webto"],
      link: "https://meilandinspire.dk",
      logo: "",
      position: "Frontend Developer",
      workplace: "Webto ApS"
    },
    {
      title: "Vestsjællands VVS & Energiservice (VGO)",
      description: "Vestsjællands VVS & Energiservice (VGO) is a danish company that offers plumbing and energy related solutions. I worked on this project in my position as a Frontend Developer at Webto ApS.",
      image: "/vgo.png",
      tags: ["TYPO3", "Scss", "Bootstrap", "Webto"],
      link: "https://vgo.dk",
      logo: "",
      position: "Frontend Developer",
      workplace: "Webto ApS"
    },
    {
      title: "Kastanien ApS",
      description: "Kastanien ApS is a danish company that offers masonry craft solutions. I worked on this project in my position as a Frontend Developer at Webto ApS.",
      image: "/kastanien.png",
      tags: ["TYPO3", "Scss", "Bootstrap", "Webto"],
      link: "https://kastanien.dk",
      logo: "",
      position: "Frontend Developer",
      workplace: "Webto ApS"
    },
    {
      title: "Lønquist Auto ApS",
      description: "Lønquist Auto ApS is a danish company that offers car repair and other services and also works as a car shop for buys and leasing solutions. I worked on this project in my position as a Frontend Developer at Webto ApS.",
      image: "/loenquist-auto.png",
      tags: ["TYPO3", "Scss", "Bootstrap", "Bilinfo", "Webto"],
      link: "https://loenquistauto.dk",
      logo: "",
      position: "Frontend Developer",
      workplace: "Webto ApS"
    },
    {
      "title": "All About U",
      "description": "All About U is a danish company that offers solutions massage and body therapy. I worked on this project in my position as a Frontend Developer at Webto ApS.",
      "image": "/all-about-u.png",
      "tags": ["WordPress", "Elementor", "Webto"],
      "link": "https://allaboutu.dk",
      "logo": "",
      "position": "Frontend Developer",
      "workplace": "Webto ApS"
    }
  ])

  const otherProjects = reactive<OtherProject[]>([
    {
      year: "2023",
      name: "DXL Discord Bot",
      location: "-",
      technologies: ["Express.js", "Discord.js"],
      link: "https://github.com/lk22/dxl-discord-bot"
    },
    {
      year: "2023",
      name: "Vue.js Component Generator",
      location: "-",
      technologies: ["clack.js", "Picocolors"],
      link: "https://github.com/lk22/vue-component-generator"
    },
    {
      year: "2022",
      name: "DocsBot",
      location: "-",
      technologies: ["Discord.js"],
      link: "https://github.com/lk22/discord-docs-bot"
    }
  ])

</script>

<template>
  <section class="container">
    <div class="row">
      <h1>Featured Projects</h1>
    </div>
    <div class="row featured-projects">
      <div class="col-6" v-for="project in featuredPropects" key="project.title">
        <FeaturedProject 
          :title="project.title"
          :description="project.description"
          :image="project.image"
          :tags="project.tags"
          :link="project.link"
          :logo="project.logo"
          :position="project.position"
          :workplace="project.workplace"
        />
      </div>
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
        <div class="col-12" v-for="project in otherProjects" key="project.name">
          <OtherProject 
            :year="project.year"
            :name="project.name"
            :location="project.location"
            :technologies="project.technologies"
            :link="project.link"
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