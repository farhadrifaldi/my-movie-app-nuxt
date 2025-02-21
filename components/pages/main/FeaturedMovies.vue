<template>
  <Carousel v-bind="carouselConfig" class="py-5 mb-10">
    <Slide v-if="data && data.results.length > 0" v-for="slide in data.results.slice(0, 4)" :key="slide.id">
      <RouterLink :to="`/movies/${slide.id}`">
        <div class="carousel__item h-[400px] flex items-center">
          <img :src="'https://image.tmdb.org/t/p/w500' + slide.poster_path" class="object-cover w-full h-[300px]" />
          <div class="bg-black px-4 py-6 h-[280px] overflow-hidden">
            <p class="font-semibold flex items-center justify-start mb-1">
              <Icon name="material-symbols:star" class="text-yellow-400 mr-2" />{{ slide.vote_average }}
            </p>
            <p class="text-2xl font-medium mb-2">{{ slide.title }}</p>
            <p class="mb-2 flex items-center">{{ $dayjs(slide.release_date).format('YYYY') }}
              <Icon name="icon-park-outline:dot" class="mx-2 text-neutral-400" size="18" />{{
                genreStore.getMappedGenres(slide.genre_ids)
              }}
            </p>
            <p class="text-sm">{{ slide.overview }}</p>
          </div>
        </div>
      </RouterLink>
    </Slide>

    <template #addons>
      <Pagination />
    </template>
  </Carousel>
</template>

<script lang="ts" setup>
import 'vue3-carousel/carousel.css'
import { Carousel, Slide, Pagination } from 'vue3-carousel'

const { data } = useFetch('/api/movies/popular')

const genreStore = useGenreStore()

const { isMobile } = useDevice()

const carouselConfig = {
  itemsToShow: isMobile ? 1 : 2.5,
  wrapAround: true,
  gap: 30
}


</script>

<style>
.carousel__slide {
  opacity: 0.5;
}

.carousel__slide--active {
  opacity: 1;
}

.carousel__pagination-button {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: gray;
  transition: width 0.5s;
}

.carousel__pagination-button.carousel__pagination-button--active {
  width: 60px;
  border-radius: 15px;
  background-color: #E74C3C;
}
</style>