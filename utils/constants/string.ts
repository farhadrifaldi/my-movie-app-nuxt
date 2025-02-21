export const TMDB_IMAGE_BASE_PATH = (type?: 'poster' | 'backdrop') => `https://image.tmdb.org/t/p/${type === 'backdrop' ? 'w1280' : 'w500'}`

export function money(num: number) {
    return num.toLocaleString("en-US", { style: "currency", currency: "USD" });
}