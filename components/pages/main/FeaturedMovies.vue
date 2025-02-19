<template>
  <Carousel v-bind="carouselConfig">
    <Slide v-for="slide in 4" :key="slide">
      <div class="carousel__item h-[400px] flex items-center">
        <img :src="sampleMovie.thumbnailLink" class="object-cover w-full h-[300px]" />
        <div class="bg-black px-4 py-6 h-[280px] overflow-hidden">
          <p class="font-semibold flex items-center justify-start mb-1">
            <Icon name="material-symbols:star" class="text-yellow-400 mr-2" />{{ sampleMovie.rating }}
          </p>
          <p class="text-2xl font-medium mb-2">{{ sampleMovie.title }}</p>
          <p class="mb-2 flex items-center">{{ sampleMovie.year }}
            <Icon name="icon-park-outline:dot" class="mx-2 text-neutral-400" size="18" />{{ sampleMovie.genre }}
          </p>
          <p class="text-sm">{{ sampleMovie.description }}</p>
        </div>
      </div>
    </Slide>

    <template #addons>
      <Pagination />
    </template>
  </Carousel>
</template>

<script lang="ts" setup>
import 'vue3-carousel/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
import { movies } from '~/utils/types/movies';

const { isMobile } = useDevice()

const carouselConfig = {
  itemsToShow: isMobile ? 1 : 2.5,
  wrapAround: true,
  gap: 30
}

const sampleMovie = movies[0]
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