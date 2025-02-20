export const TMDB_IMAGE_BASE_PATH = 'https://image.tmdb.org/t/p/w500'

export function money(num: number) {
    return num.toLocaleString("en-US", { style: "currency", currency: "USD" });
}