<script setup lang="ts">
import { Icon } from '#components';
import { useQuery } from '@tanstack/vue-query';
import axios, { type AxiosResponse } from 'axios';
import type { TmdbResponse } from '~/utils/types/movies';

const text = ref("")

const fetcher = async (search: string): Promise<AxiosResponse<TmdbResponse, any>> => await axios.get('/api/movies/search', {
    params: {
        search: search
    }
})

const { data, isLoading } = useQuery({
    queryKey: ['discover-movies', text], queryFn: async ({ queryKey }): Promise<TmdbResponse> => {
        if (queryKey[1].length > 4) {
            const { data } = await fetcher(queryKey[1].toString())
            return data
        }
        return {
            results: []
        }
    }
})

</script>

<template>
    <div class="relative w-full lg:w-1/2">
        <span class="absolute left-2 top-2"><img src="/images/movie-icon.svg" /></span>
        <input v-model="text" type="text" class="bg-[rgb(30,35,43)]/50 border-0 h-10 rounded-sm w-full px-10"
            placeholder="Find Movie" />
        <span>
            <Icon v-if="text.length < 1" name="mdi-light:magnify" class="absolute right-2 top-2 text-neutral-500"
                size="25px" />
        </span>
        <ul v-if="text.length > 4" class="absolute w-full bg-black rounded-b-lg z-50 py-4">
            <li v-for="movie in data.results" class="hover:bg-white/10 py-1 px-4 text-white w-full">
                <RouterLink :to="'/movies/' + movie.id" @click="text = ''">{{ movie.title }}</RouterLink>
            </li>
        </ul>
    </div>
</template>