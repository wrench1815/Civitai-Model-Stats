<script lang="ts" setup>
import ArrowUpSFill from '../icons/ArrowUpSFill.vue'

function toUp() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}
</script>

<template>
  <div class="fixed right-0 bottom-0 m-4">
    <button class="btn btn-primary btn-circle shadow-lg" @click="toUp">
      <ArrowUpSFill class="fill-base-100" />
    </button>
  </div>
</template>

<style scoped></style>
