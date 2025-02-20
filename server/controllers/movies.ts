import tmdbApi from '../utils/axios';
import type { Genre, Movie, SortBy, TmdbGenreResponse, TmdbMovieReviewResponse, TmdbResponse } from '~/utils/types/movies';



interface GetMovieProps {
  page?: number;
  sort_by?: SortBy;
  genres?: string;
}


export const getMovies = async (props: GetMovieProps | undefined) => {
  try {
    const { data } = await tmdbApi.get<TmdbResponse>('/discover/movie', {
      params: {
        sort_by: props?.sort_by,
        with_genres: props?.genres,
        page: props?.page ?? 1
      }
    });
    return data
  } catch (error) {
    throw error
  }
};

export const getPopularMovies = async () => {
  try {
    const { data } = await tmdbApi.get<TmdbResponse>('/movie/popular');
    return data
  } catch (error) {
    throw error
  }
};

export const getSearchMovies = async (query: string) => {
  try {
    const { data } = await tmdbApi.get<TmdbResponse>('/search/movie', {
      params: {
        query: query
      }
    });
    return data
  } catch (error) {
    throw error
  }
};



export const getMovieById = async (id?: string) => {
  try {
    if (id) {
      const { data } = await tmdbApi.get<Movie>(`/movie/${id}`);
      return data
    } else {
      throw new Error('Movie id is required')
    }
  } catch (error) {
    throw error
  }
};

export const getGenresMovies = async () => {
  try {
    const { data } = await tmdbApi.get<TmdbGenreResponse>('/genre/movie/list');
    return data
  } catch (error) {
    throw error
  }
};

export const getMovieReviews = async (id?: string) => {
  try {
    if (id) {
      const { data } = await tmdbApi.get<TmdbMovieReviewResponse>(`/movie/${id}/reviews`);
      return data
    } else {
      throw new Error('Movie id is required')
    }
  } catch (error) {
    throw error
  }
};