export type movie = {
    title?: string;
    year?: string;
    rating?: string;
    genre?: string;
    description?: string;
    thumbnailLink?: string;
    image?: string;
}

export interface Movie {
    id: number;
    title: string;
    overview: string;
    release_date: string;
    poster_path: string;
    backdrop_path: string;
    vote_average: number;
    vote_count: number;
    popularity: number;
    original_language: string;
    genre_ids: number[];
    adult: boolean;
    video: boolean;
}

export enum SortBy {
    PopularityDesc = 'popularity.desc',
    PopularityAsc = 'popularity.asc',
    ReleaseDateDesc = 'primary_release_date.desc',
    ReleaseDateAsc = 'primary_release_date.asc',
    VoteAverageDesc = 'vote_average.desc',
    VoteAverageAsc = 'vote_average.asc',
}

export interface GetMovieProps {
    page?: number;
    sort_by?: SortBy;
    genres?: string;
}

export interface Genre {
    id: number;
    name: string;
}

export const movies: movie[] = [{
    title: 'Space Sweepers',
    year: '2021',
    rating: '8.3',
    genre: 'Sci-Fi',
    description: "When the crew of a space junk collector ship called The Victory discovers a humanoid robot named Dorothy that's known to be a weapon of mass destruction, they get involved in a risky business deal which puts their lives at stake.",
    thumbnailLink: '/images/movie-sample-image.jpg',
    image: '/images/movie-sample-image.jpg'
}]