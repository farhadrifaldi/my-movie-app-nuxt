<template>
    <div class="relative py-20">
        <div class="absolute top-0 left-0 w-full h-[450px] bg-[#292e36] -z-20">&nbsp;</div>
        <div class="container mx-auto">
            <div class="flex justify-between items-center mb-5">
                <GeneralTitle level="4">Discover Movies</GeneralTitle>
                <div>
                    <GeneralButton class="mr-4" :active="sortBy === SortBy.PopularityDesc"
                        @click="sortBy = SortBy.PopularityDesc">Popularity
                    </GeneralButton>
                    <GeneralButton :active="sortBy === SortBy.ReleaseDateDesc" @click="sortBy = SortBy.ReleaseDateDesc">
                        Release Date</GeneralButton>
                </div>
            </div>
            <div class="grid grid-cols-2 xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 gap-6">
                <MovieCard v-if="data && data?.results.length > 0" v-for="movie in data?.results.slice(0, 10)"
                    :rating="movie.vote_average.toString()" :title="movie.title"
                    :year="$dayjs(movie.release_date).format('YYYY')" genre="Action"
                    :image-path="TMDB_IMAGE_BASE_PATH + movie.poster_path" />
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { SortBy, type TmdbResponse } from '~/utils/types/movies';
import { useQuery } from '@tanstack/vue-query'
import axios, { type AxiosResponse } from 'axios';
import { TMDB_IMAGE_BASE_PATH } from '~/utils/constants/string'

const sortBy = ref<SortBy>(SortBy.PopularityDesc)

const fetcher = async (sortBy: string): Promise<AxiosResponse<TmdbResponse, any>> => await axios.get('/api/movies/', {
    params: {
        sort_by: sortBy
    }
})


const { data } = useQuery({
    queryKey: ['discover-movies', sortBy], queryFn: async ({ queryKey }): Promise<TmdbResponse> => {
        const { data } = await fetcher(queryKey[1])
        return data
    }
})

</script>