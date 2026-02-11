export interface Genre {
	id: number
	name: string
}

export interface TMDBMovie {
	id: number
	title: string
	backdrop_path: string | null
	poster_path: string | null
	vote_average: number
	release_date: string
	overview: string
	genre_ids: number[]
}

export interface TMDBResponse {
	page: number
	results: TMDBMovie[]
	total_pages: number
	total_results: number
}

export interface TMDBTvShow {
	id: number
	name: string
	poster_path: string | null
	backdrop_path: string | null
	vote_average: number
	first_air_date: string
	overview: string
	genre_ids: number[]
	origin_country: string[]
}