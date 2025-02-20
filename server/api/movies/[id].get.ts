import { getMovieById } from "~/server/controllers/movies"

export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, 'id')
  const data = await getMovieById(id)
  return data
})