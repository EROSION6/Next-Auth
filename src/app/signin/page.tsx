'use client'
import { SignForm } from '@/components/SignForm'
import { signIn } from 'next-auth/react'
import { useSearchParams } from 'next/navigation'

export default function Signin() {
	const searchParams = useSearchParams()

	const callbackUrl = searchParams.get('callbackUrl') || '/profile'
	return (
		<div className='w-full h-screen flex items-center justify-center flex-col'>
			<div className='w-1/5'>
				<h1 className='text-3xl text-blue-700 font-medium text-center mb-4'>Sign In</h1>
				<SignForm />
				<button
					className='w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800'
					onClick={() => signIn('google', { callbackUrl })}
				>
					Sign in with Google
				</button>
			</div>
		</div>
	)
}
