import { Logo } from '@/shared/ui'
import { NavItems, SignIn } from '@/widgets'

function Header() {
	return (
		<div className='w-full h-18 flex items-center justify-between px-42'>
			<Logo />
			<NavItems />
			<SignIn />
		</div>
	)
}

export default Header
