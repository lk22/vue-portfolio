<template>
  <div class="contact-information">
    <div class="email">
      <a href="mailto: knudsenudvikling@gmail.com">knudsenudvikling@gmail.com</a>
    </div>
    <div class="phone">
      <a href="tel: +45 27 45 94 67">+45 27 45 94 67</a>
    </div>
  </div>
</template>

<style scoped>
  .contact-information {
    position: fixed;
    bottom: 120px;
    right: 20px;
    height: 150px;
    display: flex;
    gap: 10px;
    transform: rotate(90deg);
  }

  a {
    text-decoration: none;
    font-weight: 400;
    font-size: 13px;
  }

  @media (max-width: 767px) {
    .contact-information {
      display: none;
    }
  }
</style>