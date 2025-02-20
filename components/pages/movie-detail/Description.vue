<template>
  <div class="bg-white w-full py-10">
    <div class="container text-black mx-auto grid grid-cols-12">
      <div class="col-span-3 hidden lg:block"></div>
      <div class="col-span-12 lg:col-span-5">
        <p class="font-semibold text-red-600 mb-2">OVERVIEW</p>
        <p>Wonder Woman comes into conflict with the Soviet Union during the Cold War in the 1980s and finds a
          formidable foe by the name of the Cheetah.</p>
      </div>
    </div>
    <div class="container mx-auto my-5">
      <p class="font-semibold text-red-600">REVIEWS</p>
      <div class="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 mt-8">
        <MovieReview v-for="_ in 2" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>

</script>

<style></style>