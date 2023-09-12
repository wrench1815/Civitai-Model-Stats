<script lang="ts" setup>
import Loader from '@/components/misc/Loader.vue'
</script>

<template>
  <div class="flex justify-center items-center">
    <div class="card w-96 bg-base-100 shadow-xl">
      <div class="card-body">
        <Loader />
        <h2 class="card-title">Seems Empty</h2>
        <p>The search returned empty. Try again with different data</p>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
