import { FilmBanner, FilmBannerSkeleton, useRandomMovie } from '@/entities/film'
import { tmdbApi } from '@/shared/api/tmdb'
import { useVisit } from '@/shared/hooks'
import { motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { useMovieCredits } from '@/entities/film'

import {
	heroWidgetAnimation,
	shortHeroWidgetAnimation,
} from '@/shared/lib/animations'

export function HeroWidget() {
	const { data: movie, isLoading, isError, isFetching } = useRandomMovie()
	const [imageLoaded, setImageLoaded] = useState(false)
	const [minimumDone, setMinimumDone] = useState(false)
	const startTime = useRef(Date.now())
	const { data: credits } = useMovieCredits(movie)

	const hasSeenLongAnimation = useVisit('heroLongAnimated', 'local')

	useEffect(() => {
		setImageLoaded(false)
		setMinimumDone(false)
		startTime.current = Date.now()
	}, [movie?.id])

	useEffect(() => {
		if (movie) {
			const img = new Image()
			img.src = tmdbApi.getImageUrl(
				movie.backdrop_path || movie.poster_path || '',
			)
			img.onload = () => setImageLoaded(true)
		}
	}, [movie])

	useEffect(() => {
		if (!isLoading && !isError && movie) {
			const elapsed = Date.now() - startTime.current
			const remaining = 300 - elapsed
			if (remaining > 0) {
				const timer = setTimeout(() => setMinimumDone(true), remaining)
				return () => clearTimeout(timer)
			}
			setMinimumDone(true)
		}
	}, [isLoading, isError, movie])

	const ready =
		movie && !isLoading && !isError && imageLoaded && !isFetching && credits && minimumDone

	return (
		<motion.div
			initial='hidden'
			animate='visible'
			variants={
				hasSeenLongAnimation ? shortHeroWidgetAnimation : heroWidgetAnimation
			}
			transition={
				hasSeenLongAnimation
					? { duration: 0.6, ease: 'easeOut' }
					: { duration: 1.3, ease: [0.16, 1, 0.3, 1] }
			}
			className='flex items-center gap-32'
		>
			<div className='flex-col gap-8 flex'>
				<h1 className='text-6xl font-archivo font-[900] leading-tight'>
					<span className='text-purple-500'>ТВОЯ КИНОВСЕЛЕННАЯ</span> <br /> В
					ОДНОМ МЕСТЕ.
				</h1>
				<p className='text-xl leading-relaxed'>
					<span className='font-archivo font-[900]'>MOOVIBOX</span> — это
					персональное пространство для киноманов. Собирай коллекции, делись
					впечатлениями и открывай новые фильмы вместе с единомышленниками.
				</p>
			</div>

			<div>
				{!ready ? <FilmBannerSkeleton /> : <FilmBanner movie={movie} />}
			</div>
		</motion.div>
	)
}
