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

  .portrait-info .social-medias ul {
    display: flex;
    flex-flow: row wrap;
    align-items: center;
  }

  .portrait-info .social-medias ul li {
    margin-right: 1rem;
    list-style: none;
  }

</style>