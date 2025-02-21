<template>
  <PagesMovieDetailBanner v-if="movie" :movie="movie" />
  <PagesMovieDetailDescription v-if="movie" :movie="movie" />
  <PagesMovieDetailRecomendation v-if="movie" :genres_ids="movie.genres.map((g) => g.id)" />
</template>

<script lang="ts" setup>
import type { Movie } from '~/utils/types/movies';

const route = useRoute()
const { id } = route.params

const { data: movie } = await useFetch<Movie>('/api/movies/' + id)

</script>

<style></style>