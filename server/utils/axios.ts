import axios from 'axios';

const tmdbApi = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    params: {
        language: 'en-US'
    },
    headers: {
        Authorization: 'Bearer ' + process.env.TMDB_API_KEY,
    }
});

export default tmdbApi;
