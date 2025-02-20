import axios, { type AxiosResponse } from "axios";
import { defineStore } from "pinia";
import { links } from "~/utils/constants/nagivations";
import type { Genre, TmdbGenreResponse } from "~/utils/types/movies";

export const useGenreStore = defineStore('movie', {
    state: () => ({
        isLoading: false as boolean,
        genres: [] as Genre[]
    }),
    getters: {
        getGenres: (state) => state.genres,
        getLinks: (state) => {
            const tmpLinks = Object.assign({}, links)
            tmpLinks[0].child = state.genres.map((cat) => {
                return {
                    label: cat.name,
                    to: '/movies?category=' + cat.id,
                }
            })
            return tmpLinks
        },
        getMappedGenres: (state) => {
            return (genre_ids: number[], count?: number) => state.genres.filter((genre) => genre_ids.includes(genre.id)).slice(0, count ?? genre_ids.length).map((genre) => genre.name).join(',')
        }
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