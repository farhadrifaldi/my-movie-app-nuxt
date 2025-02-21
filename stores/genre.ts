import { defineStore } from "pinia";
import { links } from "~/utils/constants/nagivations";
import type { Genre } from "~/utils/types/movies";

export const useGenreStore = defineStore('genre', {
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
            this.isLoading = true
            const get = await $fetch('/api/movies/genres')
            if (!get) throw new Error("Error when fetch genres")
            this.isLoading = false
            this.genres = get?.genres ?? []
        }
    }
})