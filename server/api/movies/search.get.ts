import { getSearchMovies } from "~/server/controllers/movies"

export default defineEventHandler(async (event) => {
  const query: { search: string } = getQuery(event)
  const data = await getSearchMovies(query.search)
  return data
})
