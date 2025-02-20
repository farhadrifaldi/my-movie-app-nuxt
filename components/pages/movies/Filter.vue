<template>
  <div class="bg-[#15181e] rounded-md">
    <div class="font-medium py-4 px-4 border-b border-white/10">
      Sort Result By
    </div>
    <div class="font-medium py-5 px-4 border-b border-white/10">
      <GeneralSelect v-model="selectedPopularity" :options="popularityOption" />
    </div>
    <div class="font-medium py-4 px-4 border-b border-white/10">
      Genres
    </div>
    <div class="font-medium py-4 px-4 border-b border-white/10">
      <GeneralCheckbox v-for="genre in genres" v-model="checkedValue" :label="genre" :value="genre"
        class="mb-2 capitalize" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { genres } from '~/utils/constants/movies';


const checkedValue = ref<string[]>([])
const selectedPopularity = ref<string>("")

const popularityOption = [
  { label: 'Popularity Ascending', value: 'Popularity Ascending' },
  { label: 'Popularity Descending', value: 'Popularity Descending' },
  { label: 'Release Date Ascending', value: 'Release Date Ascending' },
  { label: 'Release Date Decending', value: 'Release Date Decending' },
  { label: 'Rating Ascending', value: 'Rating Ascending' },
  { label: 'Rating Decending', value: 'Rating Decending' }
]
</script>

<style></style>