import { tmdbApi } from '@/shared/api/tmdb'
import { useQuery } from '@tanstack/react-query'
import type { Genre, TMDBMovie } from './types'

export function useGenres() {
	return useQuery({
		queryKey: ['genres'],
		queryFn: () => tmdbApi.getGenres() as Promise<Genre[]>,
		staleTime: Infinity,
	})
}

export function useMovieGenres(movie: TMDBMovie | undefined) {
	const { data: genres } = useGenres()

	if (!movie || !genres) return []

	return movie.genre_ids
		.map(id => genres.find(genre => genre.id === id))
		.filter((genre): genre is Genre => genre !== undefined)
}
