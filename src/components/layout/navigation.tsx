import { Link } from './link'
import { useLocation } from 'react-router-dom'
import {
	FaHouse,
	FaGlobe,
	FaCoins,
	FaUsers
} from 'react-icons/fa6'

export const Navigation = () => {
	// Array of navigation items
	const navItems = [
		{ path: '/', icon: <FaHouse size={18} />, label: 'Home' },
		{ path: '/tasks', icon: <FaCoins size={18} />, label: 'Tasks' },
		{ path: '/friends', icon: <FaUsers size={18} />, label: 'Friends' },
		{ path: '/web3', icon: <FaGlobe size={18} />, label: 'Web3' },
	]

	const location = useLocation()

	return (
		<div className='flex space-x-2 justify-between pt-3 px-8 w-full mb-2'>
			{navItems.map((item, index) => (
				<Link
					key={index}
					to={item.path}
					className={`flex flex-col items-center ${location.pathname === item.path ? 'text-white' : 'text-gray-500'
						}`}
				>
					{item.icon}
					<span className='text-[12px] pt-1'>{item.label}</span>
				</Link>
			))}
		</div>
	)
}
