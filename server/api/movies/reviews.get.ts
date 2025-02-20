import { getMovieReviews } from "~/server/controllers/movies"

export default defineEventHandler(async (event) => {
  const query: { id: string } = getQuery(event)
  const data = await getMovieReviews(query.id)
  return data
})