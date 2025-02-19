<template>
    <div class="relative py-20">
        <div class="absolute top-0 left-0 w-full h-[450px] bg-[#292e36] -z-20">&nbsp;</div>
        <div class="container mx-auto">
            <div class="flex justify-between items-center mb-5">
                <GeneralTitle level="4">Discover Movies</GeneralTitle>
                <div>
                    <GeneralButton class="mr-4" active>Popularity</GeneralButton>
                    <GeneralButton>Release Date</GeneralButton>
                </div>
            </div>
            <div class="grid grid-cols-2 xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 gap-6">
                <MovieCard v-for="movie in [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]" rating="1.0" title="Below Zero" year="2021"
                    genre="Action" />
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>

</script>