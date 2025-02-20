import axios, { type AxiosResponse } from "axios";
import { defineStore } from "pinia";
import type { Genre, TmdbGenreResponse } from "~/utils/types/movies";

export const useGenreStore = defineStore('movie', {
    state: () => ({
        isLoading: false as boolean,
        genres: [] as Genre[]
    }),
    getters: {
        getGenres: (state) => state.genres
    },
    actions: {
        async fetchGenres() {
            console.log('fetch here')
            this.isLoading = true
            const { data, status } = await axios.get('/api/movies/genres') as AxiosResponse<TmdbGenreResponse>
            console.log('halo', data, status)
            if (status === 500) throw new Error("Error when fetch genres")
            this.isLoading = false
            this.genres = data?.genres ?? []
        }
    }
})