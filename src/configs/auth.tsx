import { User } from 'next-auth'
import Credentials from 'next-auth/providers/credentials'
import Google from 'next-auth/providers/google'

export const configAuth = {
	providers: [
		Google({
			clientId: process.env.GOOGLE_CLIENT_ID as string,
			clientSecret: process.env.GOOGLE_SECRET as string,
		}),
		Credentials({
			credentials: {
				email: { label: 'Email', type: 'email', required: true },
				password: { label: 'Password', type: 'password', required: true },
			},
			async authorize(credentials) {
				const user = {
					id: '1',
					name: 'Ali Khan',
					email: 'UaXyN@example.com',
					password: '12345',
				}

				if (!credentials?.email || !credentials?.password) {
					return null
				}

				if (user && user.password === credentials.password) {
					const { password, ...userWithPassword } = user

					return userWithPassword as User
				}
				return null
			},
		}),
	],
	pages: {
		signIn: '/signin',
	},
}
