export interface Item {
    id: number,
    title: string,
    image: string,
    keywords?: string[] | null,
    creator?: string[] | null,
    description?: string  | null,
    full_description?: string | null,
    pubDate: string,
    image_url?: string | null,
    country?: string[] | null,
    category?: string[] | null,
    language: string
}
