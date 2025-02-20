<template>
  <PagesMovieDetailBanner v-if="movie" :movie="movie" />
  <PagesMovieDetailDescription v-if="movie" :movie="movie" />
  <PagesMovieDetailRecomendation v-if="movie" :genres_ids="movie.genres.map((g) => g.id)" />
</template>

<script lang="ts" setup>
import axios, { type AxiosResponse } from 'axios';
import type { Movie } from '~/utils/types/movies';

const movie = ref<Movie | null>(null)
const route = useRoute()
const { id } = route.params
const fetcher = async (id: string): Promise<AxiosResponse<Movie, any>> => await axios.get('/api/movies/' + id)

await useAsyncData(`movie-${id}`, async () => {
  fetcher(id as string).then((response) => {
    movie.value = response.data
  })
})


</script>

<style></style>