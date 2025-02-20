<template>
  <div class="relative">
    <div class="absolute top-0 left-0 w-full h-[450px] bg-[#292e36] -z-20">&nbsp;</div>
    <div class="container mx-auto py-8">
      <GeneralTitle level="3">Movies</GeneralTitle>
      <div class="grid grid-cols-12 gap-10 mt-8">
        <div class="col-span-12 lg:col-span-3">
          <PagesMoviesFilter />
        </div>
        <div class="col-span-12 lg:col-span-9">
          <PagesMoviesCards @load-more="onLoadMore" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
function onLoadMore() {
  console.log('load')
}
</script>

<style></style>