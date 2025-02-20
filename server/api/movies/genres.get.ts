import { getGenresMovies } from "~/server/controllers/movies"

export default defineEventHandler(async () => {
  const data = await getGenresMovies()
  return data
})