import { Logo } from '@/shared/ui'
import { NavItems } from '@/widgets'
import { SignIn } from '@/widgets'

function Header() {
	return (
		<div className='w-full h-16 flex items-center justify-between px-14'>
			<Logo />
			<NavItems />
			<SignIn />
		</div>
	)
}

export default Header
