import { useVisit } from '@/shared/hooks'
import { logoAnimation } from '@/shared/lib'
import { motion } from 'framer-motion'

function Logo() {
	const hasAnimated = useVisit('logoAnimated', 'local')
	return (
		<motion.div
			initial={hasAnimated ? false : 'hidden'}
			animate='visible'
			variants={logoAnimation}
			className='text-[#E5E5E5] brightness-110'
		>
			<a
				href='#'
				className='font-archivo text-[25px] tracking-widest flex items-center font-[900]'
			>
				MOOVI<span>BOX</span>
			</a>
		</motion.div>
	)
}

export default Logo
