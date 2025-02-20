import { getPopularMovies } from "~/server/controllers/movies"

export default defineEventHandler(async () => {
  const data = await getPopularMovies()
  return data
})