import { configAuth } from '@/configs/auth'
import NextAuth from 'next-auth/next'

export const headers = NextAuth(configAuth)

export { headers as GET, headers as POST }
