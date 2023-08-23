<script setup lang="ts">
  const workplace = defineProps<{
    position: string;
    company: string;
    date: string;
  }>()
</script>

<template>
  <div class="workplace">
    <div class="row">
      <div class="col-3">
        <div class="workplace-position">
          <p>{{ workplace.position }}</p>
        </div>
      </div>
      <div class="col-5">
        <div class="workplace-company">
          <p>{{ workplace.company }}</p>
        </div>
      </div>
      <div class="col-4">
        <div class="workplace-date">
          <p>{{ workplace.date }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .workplace {
    margin-bottom: 2em;
    width: 100%;
    border-bottom: 2px solid #f9f9f9;
  }

  [class*="col-"] {
    padding: 1rem 0rem;
  }

  .workplace-date {
    text-align: right;
  }

  p {
    font-weight: bold;
  }
</style>