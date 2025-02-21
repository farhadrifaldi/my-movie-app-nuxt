<template>
  <div class="relative">
    <div class="absolute top-0 left-0 w-full h-[450px] bg-[#292e36] -z-20">&nbsp;</div>
    <div class="container mx-auto py-8">
      <GeneralTitle level="3">Movies</GeneralTitle>
      <div class="grid grid-cols-12 gap-10 mt-8">
        <div class="col-span-12 lg:col-span-3">
          <PagesMoviesFilter @on-change-genres="(val) => genres = val" @on-change-sort-by="(val) => sortBy = val" />
        </div>
        <div class="col-span-12 lg:col-span-9">
          <PagesMoviesCards :movies="movies" @load-more="onLoadMore" :is-loading="isLoading" :is-error="isError" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useQuery } from '@tanstack/vue-query'
import axios, { type AxiosResponse } from 'axios';
import { SortBy, type Movie, type TmdbResponse } from '~/utils/types/movies';

const genres = ref<string[]>([])
const movies = ref<Movie[]>([])
const sortBy = ref<SortBy>(SortBy.PopularityDesc)
const page = ref(1)

const fetcher = async (sortBy: string, page: number, genre: string[]): Promise<AxiosResponse<TmdbResponse, any>> => await axios.get('/api/movies/', {
  params: {
    sort_by: sortBy,
    page: page,
    genres: genre.join(',')
  }
})

const { data, isLoading, isError } = useQuery({
  queryKey: ['discover-movies', sortBy, page, genres], queryFn: async ({ queryKey }): Promise<TmdbResponse> => {
    const { data } = await fetcher(queryKey[1].toString(), queryKey[2] as number, genres.value)
    return data
  }
})

watch(() => data.value, (newVal) => {
  console.log('this is newval', newVal)
  if (!isLoading.value && newVal.results) {
    console.log('this is new val', newVal)
    movies.value = [...movies.value, ...newVal.results]
  }
})

watch(() => sortBy.value, () => {
  movies.value = []
  page.value = 1
})

watch(() => genres.value, () => {
  movies.value = []
  page.value = 1
})

function onLoadMore() {
  page.value += 1
  nextTick()
  console.log('load')
}
</script>

<style></style>