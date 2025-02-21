<template>
  <div :class="`flex items-end bg-center backdrop-brightness-75 bg-cover h-[550px] -mt-16`"
    :style="`background-image: url(${TMDB_IMAGE_BASE_PATH('backdrop') + movie.backdrop_path})`">
    <div class="backdrop-brightness-50 w-full h-full flex items-end flex-wrap">
      <div class="w-full">
        <div class="container mx-auto w-full grid grid-cols-12 items-center text-sm mb-5">
          <div class="col-span-3 hidden lg:block"></div>
          <div class="col-span-12 md:col-span-8 text-center md:text-left">
            <p class="text-lg mb-2">{{ $dayjs(movie.release_date).format('YYYY') }}</p>
            <p class="text-5xl font-semibold mb-2">{{ movie.title }}</p>
            <p class="">{{movie.genres.map((g) => g.name).join(', ')}}</p>
          </div>
        </div>
        <div class="w-full bg-black/65 h-auto lg:h-[80px] py-5">
          <div class="mx-auto container items-center grid grid-cols-12 text-sm h-full gap-3">
            <div class="col-span-3 hidden lg:block"></div>
            <div class="col-span-12 lg:col-span-9 flex flex-wrap justify-center lg:justify-start gap-6">
              <div class="flex w-full lg:w-auto justify-center">
                <div class="flex mr-3">
                  <Icon name="material-symbols:star" size="40" class="text-yellow-400 mr-2" />
                  <span class="font-semibold text-4xl">{{ movie.vote_average }}</span>
                </div>
                <div>
                  <p class="font-extralight text-neutral-400">USER SCORE</p>
                  <p>{{ movie.vote_count }} VOTES</p>
                </div>
              </div>
              <div class="text-center md:text-left">
                <p class="font-extralight text-neutral-400">STATUS</p>
                <p>{{ movie.status }}</p>
              </div>
              <div class="text-center md:text-left">
                <p class="font-extralight text-neutral-400">LANGUAGE</p>
                <p>{{ movie.original_language }}</p>
              </div>
              <div class="text-center md:text-left">
                <p class="font-extralight text-neutral-400">BUDGET</p>
                <p>{{ money(movie.budget) }}</p>
              </div>
              <div class="text-center md:text-left">
                <p class="font-extralight text-neutral-400">PRODUCTION</p>
                <p>{{ movie.production_companies[0].name }}</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="container mx-auto hidden lg:block relative">
    <div class="absolute col-span-2 -bottom-28 left-0">
      <img :src="TMDB_IMAGE_BASE_PATH() + movie.poster_path" alt="image" class="h-[330px] w-[220px] object-cover">
    </div>
  </div>
</template>

<script setup lang="ts">
import { money, TMDB_IMAGE_BASE_PATH } from '~/utils/constants/string';
import type { Movie } from '~/utils/types/movies';

const genreStore = useGenreStore()
const { movie } = defineProps<{ movie: Movie }>()
</script>
