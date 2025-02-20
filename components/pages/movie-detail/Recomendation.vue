<template>
  <div class="container mx-auto py-16">
    <p class="font-medium text-lg mb-10">RECOMMENDATION MOVIES</p>
    <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
      <MovieCard v-for="_ in 5" rating="1.0" title="Below Zero" year="2021" genre="Action" />
    </div>
  </div>
</template>

<script lang="ts" setup>

</script>

<style></style>