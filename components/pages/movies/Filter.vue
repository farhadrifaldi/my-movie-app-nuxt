<template>
  <div class="bg-[#15181e] rounded-md">
    <div class="font-medium py-4 px-4 border-b border-white/10 flex justify-between items-center" @click="open = !open">
      Sort Result By
      <Icon :name="`${open ? 'line-md:chevron-up' : 'line-md:chevron-down'}`" class="md:hidden block" />
    </div>
    <div :class="`${open ? 'max-h-screen' : 'max-h-0'} transition-all overflow-hidden`">
      <div class="font-medium py-5 px-4 border-b border-white/10">
        <GeneralSelect v-model="selectedPopularity" :options="popularityOption" />
      </div>
      <div class="font-medium py-4 px-4 border-b border-white/10">
        Genres
      </div>
      <div class="font-medium py-4 px-4 border-b border-white/10">
        <GeneralCheckbox v-for="genre in genreStore.getGenres" v-model="checkedValue" :label="genre.name"
          :value="genre.id.toString()" class="mb-2 capitalize" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { SortBy } from '~/utils/types/movies';


const genreStore = useGenreStore()

const emit = defineEmits<{
  (e: 'onChangeSortBy', value: SortBy): void,
  (e: 'onChangeGenres', value: string[]): void
}>();

const open = ref<boolean>(false)
const checkedValue = ref<string[]>([])
const selectedPopularity = ref<SortBy>()

watch(selectedPopularity, (value) => {
  emit('onChangeSortBy', value)
})

watch(checkedValue, (val) => {
  emit('onChangeGenres', val)
})

const popularityOption = [
  { label: 'Popularity Ascending', value: SortBy.PopularityAsc },
  { label: 'Popularity Descending', value: SortBy.PopularityDesc },
  { label: 'Release Date Ascending', value: SortBy.ReleaseDateAsc },
  { label: 'Release Date Decending', value: SortBy.ReleaseDateDesc },
  { label: 'Rating Ascending', value: SortBy.VoteAverageAsc },
  { label: 'Rating Decending', value: SortBy.VoteAverageDesc }
]
</script>

<style></style>