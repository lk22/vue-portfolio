<script setup lang="ts"></script>

<template>
  <footer>
    <div class="container">
      <div class="row">
        <div class="col-12">
          <span>
            <img src="/logo.svg" alt="">
          </span>
          <span>
            Leo knudsen
          </span>
          <span>
            E-mail: knudsenudvikling@gmail.com
          </span>
          <span>
            Tel: +45 27 45 94 67
          </span>
        </div>
      </div>
    </div>
  </footer>
</template>


<style scoped>
  footer {
    padding: 1rem 0;
    bottom: 0;
    width: 100%;
  }

  span:nth-child(2) {
    font-weight: bold;
  }

  .row {
    align-items: center;
  }

  .col-12 {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  @media (max-width: 991px) {
    .col-12 {
      flex-direction: column;
      gap: 10px;
    }
  }
</style>