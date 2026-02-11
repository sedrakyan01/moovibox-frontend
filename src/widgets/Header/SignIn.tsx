import { useVisit } from '@/shared/hooks'
import { signInAnimation } from '@/shared/lib'
import { motion } from 'framer-motion'
import { LogIn } from 'lucide-react'
import { Link } from 'react-router-dom'

function SignIn() {
	const hasAnimated = useVisit('signInAnimated', 'local')
	return (
		<motion.div
			initial={hasAnimated ? false : 'hidden'}
			animate='visible'
			variants={signInAnimation}
		>
			<Link to='/signin'>
				<button className='px-5 py-1.5 rounded-md flex gap-3 items-center text-[#E5E5E5] hover:text-white cursor-pointer transition-colors tracking-widest font-bold bg-[#262626] text-xs border border-white/20 brightness-110'>
					<LogIn size={19} />
					ВХОД
				</button>
			</Link>
		</motion.div>
	)
}

export default SignIn
