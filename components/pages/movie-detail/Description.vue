<template>
  <div class="bg-white w-full py-10">
    <div class="container text-black mx-auto grid grid-cols-12">
      <div class="col-span-3 hidden lg:block"></div>
      <div class="col-span-12 lg:col-span-5">
        <p class="font-semibold text-red-600 mb-2">OVERVIEW</p>
        <p>{{ movie.overview }}</p>
      </div>
    </div>
    <div class="container mx-auto my-5">
      <p class="font-semibold text-red-600">REVIEWS</p>
      <div class="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 mt-8">
        <MovieReview v-if="data" v-for="review in data.results.slice(0, 2)" :review="review" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useQuery } from '@tanstack/vue-query';
import axios, { type AxiosResponse } from 'axios';
import type { Movie, TmdbMovieReviewResponse } from '~/utils/types/movies';

const { movie } = defineProps<{ movie: Movie }>()

const fetcher = async (genres: string): Promise<AxiosResponse<TmdbMovieReviewResponse, any>> => await axios.get('/api/movies/reviews', {
  params: {
    id: movie.id
  }
})

const { data } = useQuery({
  queryKey: ['reviews', movie.id], queryFn: async ({ queryKey }): Promise<TmdbMovieReviewResponse> => {
    const { data } = await fetcher(queryKey[1] as string)
    return data
  }
})
</script>

<style></style>