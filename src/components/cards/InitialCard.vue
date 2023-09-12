<script lang="ts" setup>
import Loader from '@/components/misc/Loader.vue'
</script>

<template>
  <div class="flex justify-center items-center">
    <div class="card w-96 bg-base-100 shadow-xl">
      <div class="card-body">
        <Loader />
        <h2 class="card-title">Civitai Model Stats</h2>
        <p>Search with your username to see you model stats based on the Filter selected</p>

        <blockquote>Currently only 100 items are supported</blockquote>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
