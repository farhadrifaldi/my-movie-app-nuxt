export const TMDB_IMAGE_BASE_PATH = (type?: 'poster' | 'backdrop') => `https://image.tmdb.org/t/p/${type === 'poster' ? 'w500' : 'w1280'}`

export function money(num: number) {
    return num.toLocaleString("en-US", { style: "currency", currency: "USD" });
}