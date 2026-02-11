export function FilmBannerSkeleton() {
	return (
		<div className='w-[500px] h-3/4 rounded-xl overflow-hidden animate-pulse'>
			<div className='relative aspect-[16/9] bg-zinc-800' />

			<div className='bg-[#151515] px-4 py-5 flex flex-col gap-3 rounded-b-xl h-[140px]'>
				<div className='h-6 w-3/4 bg-zinc-700 rounded-md' />

				<div className='flex gap-2'>
					<div className='h-5 w-16 bg-zinc-700 rounded-md' />
					<div className='h-5 w-20 bg-zinc-700 rounded-md' />
					<div className='h-5 w-14 bg-zinc-700 rounded-md' />
				</div>

				<div className='flex items-center gap-4 mt-2'>
					<div className='h-4 w-24 bg-zinc-700 rounded-md' />
					<div className='h-4 w-40 bg-zinc-700 rounded-md' />
				</div>
			</div>
		</div>
	)
}
