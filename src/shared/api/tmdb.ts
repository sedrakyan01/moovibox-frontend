import type { AxiosInstance } from 'axios'
import axios from 'axios'

class TMDBApi {
	private client: AxiosInstance
	private readonly baseURL = 'https://api.themoviedb.org/3'
	private readonly apiKey: string

	constructor() {
		this.apiKey = import.meta.env.VITE_TMDB_API_KEY

		if (!this.apiKey) {
			throw new Error('TMDB API key is not defined')
		}

		this.client = axios.create({
			baseURL: this.baseURL,
			params: {
				api_key: this.apiKey,
				language: 'ru-RU',
			},
		})
	}

	async getPopularMovies(page = 1) {
		const { data } = await this.client.get('/movie/popular', {
			params: { page },
		})
		return data
	}

	async getPopularTvShows(page = 1) {
		const { data } = await this.client.get('/tv/popular', {
			params: { page },
		})
		return data
	}

	async getMovieDetails(id: number) {
		const { data } = await this.client.get(`/movie/${id}`)
		return data
	}

	async getMovieCredits(id: number) {
		const { data } = await this.client.get(`/movie/${id}/credits`)
		return data
	}

	async getGenres() {
		const { data } = await this.client.get('/genre/movie/list')
		return data.genres
	}

	async getTvGenres() {
		const { data } = await this.client.get('/genre/tv/list')
		return data.genres
	}

	getImageUrl(
		path: string,
		size: 'w300' | 'w342' | 'w500' | 'w780' | 'w1280' | 'original' = 'w500',
	) {
		return `https://image.tmdb.org/t/p/${size}${path}`
	}
}

export const tmdbApi = new TMDBApi()
