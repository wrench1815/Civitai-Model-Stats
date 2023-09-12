<script setup lang="ts">
import { ref } from 'vue'

import Api from '@/utils/api/Api'

import InitialCard from '@/components/cards/InitialCard.vue'
import NoDataCard from '@/components/cards/NoDataCard.vue'
import ToTop from '@/components/misc/ToTop.vue'

// icons
import DownloadCloud2Fill from '@/components/icons/DownloadCloud2Fill.vue'
import Heart3Fill from '@/components/icons/Heart3Fill.vue'
import Chat1Fill from '@/components/icons/Chat1Fill.vue'
import StarFill from '@/components/icons/StarFill.vue'
import DeleteBin2Fill from '@/components/icons/DeleteBin2Fill.vue'

const api = new Api()

const stats: any = ref({})
const fetched = ref(false)
const params = ref({
  username: '',
  period: ''
})
const errMsg = ref('')

async function fetchStats() {
  errMsg.value = ''
  if (!params.value.username.length) {
    errMsg.value = 'Civitai Username is required'
    return
  }
  if (!params.value.period.length) {
    errMsg.value = 'Filter by is required'
    return
  }
  const res = await api.getModelStats(params.value)

  stats.value = res
  fetched.value = true
}

function reset() {
  stats.value = {}
  fetched.value = false
  params.value = {
    username: '',
    period: ''
  }
}
</script>

<template>
  <div class="sticky top-0 z-50 pb-4">
    <form
      class="flex flex-col md:flex-row items-center gap-4 justify-center"
      @submit.prevent="fetchStats"
    >
      <div
        class="flex flex-col md:flex-row items-center gap-4 justify-center bg-base-100 rounded-b-xl border-b border-primary shadow-lg py-4 px-4"
      >
        <div class="form-control w-full max-w-xs">
          <input
            type="text"
            placeholder="Civitai Username"
            class="input input-primary input-bordered w-full max-w-xs"
            v-model="params.username"
          />
        </div>
        <div class="form-control w-full max-w-xs">
          <select class="select select-primary select-bordered" v-model="params.period">
            <option disabled selected value="">Filter by</option>
            <option value="AllTime">All Time</option>
            <option value="Year">Year</option>
            <option value="Month">Month</option>
            <option value="Week">Week</option>
            <option value="Day">Day</option>
          </select>
        </div>
        <button type="submit" class="btn btn-primary">Query</button>
        <button v-if="fetched" type="reset" class="btn btn-circle btn-ghost" @click="reset">
          <DeleteBin2Fill class="icon fill-error" />
        </button>
      </div>
    </form>
  </div>

  <p class="text-center text-error" v-if="errMsg">{{ errMsg }}</p>

  <template v-if="fetched">
    <div class="flex flex-wrap gap-8 justify-center" v-if="stats.metadata.totalItems">
      <div
        class="card card-compact w-96 bg-base-100 hover:shadow-xl transition-all ease-in-out duration-500 border-b border-transparent hover:border-primary h-fit group rounded-t-2xl"
        v-for="model in stats.items"
      >
        <a :href="`https://civitai.com/models/${model.id}`" target="_blank">
          <figure class="rounded-t-2xl">
            <img
              class="group-hover:scale-105 transition-all ease-in-out duration-500"
              :src="model.modelVersions[0].images[0].url"
              :alt="model.name"
            />
          </figure>
        </a>
        <div class="card-body">
          <h2 class="card-title">{{ model.name }}</h2>

          <div class="flex">
            <p class="stat-item text-primary">
              {{ model.stats.downloadCount }} <DownloadCloud2Fill class="icon fill-primary" />
            </p>
            <p class="stat-item text-secondary">
              {{ model.stats.favoriteCount }} <Heart3Fill class="icon fill-secondary" />
            </p>
            <p class="stat-item text-accent">
              {{ model.stats.commentCount }} <Chat1Fill class="icon fill-accent" />
            </p>
            <p class="stat-item text-warning">
              {{ model.stats.rating }} <StarFill class="icon fill-warning" />
            </p>
          </div>

          <!-- <div class="card-actions justify-end">
          <button class="btn btn-primary">Buy Now</button>
        </div> -->
        </div>
      </div>
    </div>

    <NoDataCard v-else />
  </template>

  <InitialCard v-else />

  <ToTop />
</template>

<style scoped>
.stat-item {
  @apply flex items-center justify-center gap-2 font-bold;
}
.icon {
  @apply w-7 h-7 -mt-1;
}
</style>
