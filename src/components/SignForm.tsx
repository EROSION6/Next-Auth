'use client'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import React from 'react'

interface InputProps {
	placeholder?: string
	name?: string
}

export const SignForm = () => {
	const router = useRouter()

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()

		const formData = new FormData(e.currentTarget)

		const res = await signIn('credentials', {
			email: formData.get('email'),
			password: formData.get('password'),
			redirect: false,
		})

		if (res && !res.error) {
			router.push('/profile')
		} else {
			console.error(res)
		}
	}
	return (
		<form onSubmit={handleSubmit} className='flex flex-col gap-y-3'>
			<Input placeholder='Write email...' name='email' />
			<Input placeholder='Write password...' name='password' />
			<button
				className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm py-2.5 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800'
				type='submit'
			>
				Sign In
			</button>
		</form>
	)
}

export const Input = ({ name, placeholder }: InputProps) => (
	<input
		required
		type='text'
		name={name}
		placeholder={placeholder}
		className='w-full py-2 px-3 border border-blue-700 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-base'
	/>
)
