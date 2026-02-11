import { tmdbApi } from '@/shared/api/tmdb'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import { useCallback, useEffect, useRef } from 'react'
import type { TMDBMovie } from './types'

const MAX_PAGES = 50

function getRandomPage(): number {
	return Math.floor(Math.random() * MAX_PAGES) + 1
}

function getRandomItem<T>(items: T[]): T {
	return items[Math.floor(Math.random() * items.length)]
}

export function useRandomMovie() {
	const queryClient = useQueryClient()
	const pageRef = useRef(getRandomPage())

	const query = useQuery({
		queryKey: ['random-movie', pageRef.current],
		queryFn: async (): Promise<TMDBMovie> => {
			const data = await tmdbApi.getPopularMovies(pageRef.current)

			let filtered = data.results?.filter(
				movie =>
					movie.vote_count > 1000 &&
					movie.vote_average > 8 &&
					!!movie.poster_path,
			)

			if (!filtered || filtered.length === 0) {
				const fallback = await tmdbApi.getPopularMovies(1)
				filtered = fallback.results.filter(
					movie =>
						movie.vote_count > 0 &&
						movie.vote_average > 0 &&
						!!movie.poster_path,
				)
			}

			return getRandomItem(filtered)
		},
		staleTime: Infinity,
		retry: 2,
	})

	useEffect(() => {
		const interval = setInterval(() => {
			pageRef.current = getRandomPage()
			queryClient.invalidateQueries({ queryKey: ['random-movie'] })
		}, 10000)

		return () => clearInterval(interval)
	}, [queryClient])

	const refreshMovie = useCallback(() => {
		pageRef.current = getRandomPage()
		queryClient.invalidateQueries({ queryKey: ['random-movie'] })
	}, [queryClient])

	return { ...query, refreshMovie }
}
