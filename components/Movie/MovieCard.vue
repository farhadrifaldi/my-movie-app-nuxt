<template>
  <div class="relative group">
    <span class="bg-black/50 absolute top-1 right-1 font-semibold px-3 py-1 z-20">{{ rating }}</span>
    <div class="w-full h-[330px] relative">
      <img src="/images/movie-sample-image.jpg" class="object-cover w-full h-full" />
      <div
        class="absolute bottom-0 left-0 w-full h-0 group-hover:h-full bg-[#1e232b]/80 transition-all flex items-center overflow-hidden z-30">
        <div class="w-full text-center">
          <p class="text-center text-3xl font-semibold flex items-center justify-center">
            <Icon name="material-symbols:star" class="text-yellow-400 mr-2" />{{ rating }}
          </p>
          <p class="font-medium text-lg mt-6 ">{{ genre }}</p>
          <GeneralButton class="mt-6" active>View</GeneralButton>
        </div>
      </div>
    </div>
    <div class="mt-2">
      <p class="font-semibold">{{ title }}</p>
      <p class="font-extralight">{{ year }}</p>
    </div>

  </div>
</template>

<script lang="ts" setup>
import { GeneralButton } from '#components';

const { title, year, rating, genre } = defineProps<{
  title: string;
  year: string;
  rating: string;
  genre: string;
}>()
</script>

<style></style>