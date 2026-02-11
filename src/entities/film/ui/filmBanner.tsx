import { useMovieCredits } from '@/entities/film/model/useMovieCredits'
import { tmdbApi } from '@/shared/api/tmdb'
import { motion } from 'framer-motion'
import { Heart, User } from 'lucide-react'
import type { TMDBMovie } from '../model/types'
import { useMovieGenres } from '../model/useGenres'
import { FilmBannerSkeleton } from './filmBannerSkeleton'

interface FilmBannerProps {
	movie: TMDBMovie
}

export function FilmBanner({ movie }: FilmBannerProps) {
	const genres = useMovieGenres(movie)
	const ready = genres.length > 0
	const { data: credits } = useMovieCredits(movie)
	const director = credits?.crew.find(p => p.job === 'Director')

	return (
		<motion.div
			className='w-[500px] h-3/4 rounded-xl overflow-hidden group cursor-pointer transition-all duration-300'
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 0.3 }}
		>
			<div className='relative'>
				<div className='px-1.5 py-0.5 right-2 top-74 bg-purple-600 absolute text-center flex items-center justify-center font-bold border-none rounded-md gap-1 border border-white/20 z-50'>
					<span className='text-xs font-[800] border-none font-archivo text-white'>
						{movie.vote_average === 0 ? '0' : movie.vote_average.toFixed(1)}
					</span>
				</div>
				<img
					src={tmdbApi.getImageUrl(
						movie.backdrop_path || movie.poster_path, 'w780',
					)}
					alt={movie.title}
					className='w-full h-full object-cover'
					loading='eager'
				/>
			</div>

			<div className='bg-[#151515] px-4 py-5 flex flex-col gap-2 rounded-b-xl h-34 shadow-2xl'>
				<div className='flex flex-col gap-2 mb-2'>
					<span className='text-2xl font-archivo font-bold text-[#E5E5E5] brightness-110 mb-1 truncate'>
						{movie.title}
						<sup className='ml-1 text-xs text-zinc-400'>
							{movie.release_date?.slice(0, 4)}
						</sup>
					</span>
					{!ready ? (
						<span className='text-xs text-zinc-400'>Загрузка...</span>
					) : (
						<span className='flex gap-2'>
							{genres.map(genre => (
								<span
									key={genre.id}
									className='w-auto px-3 py-1 text-xs font-semibold bg-white/10 backdrop-blur-sm rounded-md truncate text-white/90 border border-white/20'
								>
									{genre.name}
								</span>
							))}
						</span>
					)}
				</div>
				<div>
					<div className='flex items-center gap-4'>
						<div className='flex items-center gap-1'>
							<Heart size={16} className='text-purple-500 fill-purple-500' />
							<span className='text-xs mt-0.5 font-semibold'>
								{movie.vote_count === 0
									? '0'
									: movie.vote_count.toLocaleString('ru-RU') + ' оценок'}
							</span>
						</div>
						{!ready ? (
							<FilmBannerSkeleton />
						) : (
							<div className='flex items-center gap-1 text-xs font-semibold'>
								<User size={16} className='text-purple-500 fill-purple-500' />
								{director && <span>Режиссёр: {director.name}</span>}
							</div>
						)}
					</div>
				</div>
			</div>
		</motion.div>
	)
}
