import { getMovies } from "~/server/controllers/movies"
import type { GetMovieProps } from "~/utils/types/movies"

export default defineEventHandler(async (event) => {
  const query: GetMovieProps = getQuery(event)
  const data = await getMovies({
    genres: query.genres,
    page: query.page,
    sort_by: query.sort_by
  })
  return data
})
