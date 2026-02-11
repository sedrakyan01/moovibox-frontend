import { useVisit } from '@/shared/hooks'
import { containerVariants, itemVariants, navItems } from '@/shared/lib'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

function NavItems() {
	const hasAnimated = useVisit('navAnimated', 'local')

	return (
		<motion.div
			initial={hasAnimated ? false : 'hidden'}
			animate='visible'
			variants={containerVariants}
			className='flex items-center gap-14 text-sm font-[900] font-archivo'
		>
			{navItems.map(item => (
				<motion.div key={item.name} variants={itemVariants}>
					<Link
						to={item.path}
						className='text-[#E5E5E5] tracking-[0.1rem] hover:text-white transition-colors'
					>
						<li key={item.name}>{item.name}</li>
					</Link>
				</motion.div>
			))}
		</motion.div>
	)
}

export default NavItems
