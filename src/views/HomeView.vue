<script setup lang="ts">
import Loader from '@/components/misc/Loader.vue'
</script>

<template>
  <div class="flex justify-center items-center h-screen">
    <div class="card w-96 bg-base-100 shadow-xl">
      <div class="card-body">
        <Loader />
        <h2 class="card-title">Coming soon</h2>
        <p>Whatever it is, it's being cooked rn.</p>
        <p>Have patience!</p>
        <div class="card-actions justify-end">
          <button class="btn btn-primary">OK</button>
        </div>
      </div>
    </div>
  </div>
</template>
