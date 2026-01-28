import { Link } from 'react-router-dom'

const navItems = [
	{
		name: 'Фильмы',
		path: '/films',
	},
	{ name: 'Сериалы', path: '/series' },
	{ name: 'Колекции', path: '/collections' },
	{ name: 'Топ', path: '/top' },
	{
		name: 'Новости',
		path: '/news',
	},
]

function NavItems() {
	return (
		<div className='flex items-center gap-4 font-semibold'>
			{navItems.map(item => (
				<Link
					to={item.path}
					className='text-[#A1A1A1] hover:text-white transition-colors'
				>
					<li key={item.name}>{item.name}</li>
				</Link>
			))}
		</div>
	)
}

export default NavItems
