'use client'
import { signOut, useSession } from 'next-auth/react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const links = [
	{ label: 'Home', path: '/' },
	{ label: 'Posts', path: '/posts' },
]
export const Header = () => {
	const pathname = usePathname()
	const session = useSession()
	return (
		<header className='w-full flex justify-center py-3'>
			<nav className='space-x-3'>
				{links.map((link, index) => {
					const isActive = link.path === pathname
					return (
						<Link
							href={link.path}
							key={index}
							className={`text-xl ${isActive ? 'text-blue-500' : ''}`}
						>
							{link.label}
						</Link>
					)
				})}
				{session?.data && <Link href='/profile'>Profile</Link>}
				{session?.data ? (
					<Link href='#' onClick={() => signOut({ callbackUrl: '/' })}>
						SigOut
					</Link>
				) : (
					<Link href='/signin'>SignIn</Link>
				)}
			</nav>
		</header>
	)
}
