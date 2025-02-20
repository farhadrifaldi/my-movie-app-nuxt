<template>
  <div class="grid grid-cols-2 xl:grid-cols-4 md:grid-cols-3 gap-6">
    <MovieCard v-for="movie in 10" rating="1.0" title="Below Zero" year="2021" genre="Action" />
  </div>
  <div class="flex justify-center mt-10">
    <GeneralButton active @click="onLoadMore">Load More</GeneralButton>
  </div>
</template>

<script lang="ts" setup>
const emit = defineEmits<{
  (e: 'loadMore'): void
}>();

function onLoadMore() {
  emit('loadMore')
}

</script>

<style></style>