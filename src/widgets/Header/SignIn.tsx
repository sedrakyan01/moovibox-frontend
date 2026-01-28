import { Link } from 'react-router-dom'

const signInItems = [
	{
		name: 'Войти',
		path: '/login',
	},
	{
		name: 'Создать аккаунт',
		path: '/register',
	},
]

function SignIn() {
	return (
		<div className='flex items-center gap-4'>
			{signInItems.map(item => (
				<Link to={item.path}>
					<li
						key={item.name}
						className='px-4 py-1 rounded-md text-black transition-colors font-medium bg-[#E5E5E5]'
					>
						{item.name}
					</li>
				</Link>
			))}
		</div>
	)
}

export default SignIn
