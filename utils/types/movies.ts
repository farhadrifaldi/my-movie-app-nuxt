export type movie = {
    title?: string;
    year?: string;
    rating?: string;
    genre?: string;
    description?: string;
    thumbnailLink?: string;
    image?: string;
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