<script setup lang="ts">
  // const socialMediaObserver = new IntersectionObserver((entries) => {
  //   entries.forEach((entry) => {
  //     if ( !entry.isIntersecting ) {
  //       entry.classList.remove('social-medias');
  //       entry.classList.add('fixed-social-medias');
  //     } else {
  //       entry.classList.remove('fixed-social-medias');
  //       entry.classList.add('social-medias')
  //     }
  //   })
  // })

  // const mediaIcons = document.querySelector('.some-list-item');
  // socialMediaObserver.observe(mediaIcons);
</script>

<template>
  <ul class="fixed-social-medias">
    <li class="some-list-item">
      <a href="https://www.linkedin.com/in/leo-knudsen-21b6a19a/" target="_blank">
        <img src="/linkedin.svg" alt="">
      </a>
    </li>
    <li class="some-list-item">
      <a href="https://www.facebook.com/leo.knudsen.9/" target="_blank">
        <img src="/facebook-square.svg" alt="">
      </a>
    </li>
    <li class="some-list-item">
      <a href="https://github.com/lk22" target="_blank">
        <img src="/github.svg" alt="">
      </a>
    </li>
  </ul>
</template>

<style scoped>
  .fixed-social-medias {
    position: fixed;
    width: 80px;
    height: 150px;
    bottom: 0px;
    left: 40px;
  }

  .fixed-social-medias li {
    list-style: none;
    margin-bottom: 10px;
  }

  li img {
    height: 30px;
    width: 30px;
  }

  @media (max-width: 767px) {
    .fixed-social-medias {
      display: none;
    }
  }
</style>