import { tmdbApi } from '@/shared/api/tmdb'
import { useQuery } from '@tanstack/react-query'
import type { TMDBCredits, TMDBMovie } from './types'

export function useMovieCredits(movie: TMDBMovie | undefined) {
	return useQuery({
		queryKey: ['credits', movie?.id],
		queryFn: async (): Promise<TMDBCredits> => {
			if (!movie?.id) throw new Error('No movie id')
			return tmdbApi.getMovieCredits(movie.id)
		},
		enabled: !!movie?.id,
		staleTime: Infinity,
	})
}
