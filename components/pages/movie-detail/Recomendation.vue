<template>
  <div class="container mx-auto py-16">
    <p class="font-medium text-lg mb-10">RECOMMENDATION MOVIES</p>
    <GeneralDbContent :is-error="isError" :is-loading="isLoading">
      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
        <MovieCard v-if="data?.results" v-for="movie in data.results.slice(0, 5)"
          :rating="movie.vote_average.toString()" :title="movie.title" :year="$dayjs(movie.release_date).format('YYYY')"
          :to="`/movies/${movie.id}`" :image-path="TMDB_IMAGE_BASE_PATH() + movie.poster_path"
          :genre="genreStore.getMappedGenres(movie.genre_ids, 1)" />
      </div>
    </GeneralDbContent>
  </div>
</template>

<script lang="ts" setup>
import { useQuery } from '@tanstack/vue-query';
import axios, { type AxiosResponse } from 'axios';
import { TMDB_IMAGE_BASE_PATH } from '~/utils/constants/string';
import type { TmdbResponse } from '~/utils/types/movies';

const genreStore = useGenreStore()

const { genres_ids } = defineProps<{
  genres_ids: number[];
}>()

const fetcher = async (genres: string): Promise<AxiosResponse<TmdbResponse, any>> => await axios.get('/api/movies/', {
  params: {
    genres: genres
  }
})

const { data, isLoading, isError } = useQuery({
  queryKey: ['discover-movies-recommendation', genres_ids], queryFn: async ({ queryKey }): Promise<TmdbResponse> => {
    const { data } = await fetcher(genres_ids.join(','))
    return data
  }
})
</script>
