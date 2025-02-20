<template>
  <div class="grid grid-cols-2 xl:grid-cols-4 md:grid-cols-3 gap-6">
    <MovieCard v-for="movie in movies" :rating="movie.vote_average.toString()" :title="movie.title"
      :year="$dayjs(movie.release_date).format('YYYY')" :image-path="TMDB_IMAGE_BASE_PATH + movie.poster_path"
      :to="'/movies/' + movie.id" :genre="genreStore.getMappedGenres(movie.genre_ids, 1)" />
  </div>
  <div class="flex justify-center mt-10">
    <GeneralButton active @click="onLoadMore">Load More</GeneralButton>
  </div>
</template>

<script lang="ts" setup>
import { TMDB_IMAGE_BASE_PATH } from '~/utils/constants/string'
import type { Movie } from '~/utils/types/movies';

const genreStore = useGenreStore()
const { movies } = defineProps<{ movies: Movie[] }>()

const emit = defineEmits<{
  (e: 'loadMore'): void
}>();

function onLoadMore() {
  emit('loadMore')
}

</script>

<style></style>