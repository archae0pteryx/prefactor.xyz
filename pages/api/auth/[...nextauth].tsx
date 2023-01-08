import NextAuth, { Session } from 'next-auth'
import GithubProvider from 'next-auth/providers/github'
import prisma from '../../../prisma/client'
import { User } from '@prisma/client'

export type UserSession = null &
  boolean &
  Session & {
    user: {
      prismaId: number
      githubAccessToken: string
      username: string
    }
  }

export const authOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID || '',
      clientSecret: process.env.GITHUB_CLIENT_SECRET || '',
    }),
  ],
  pages: {
    signIn: 'auth/signin',
  },
  callbacks: {
    async jwt({ token, account, profile }: any) {
      if (account) {
        const {
          login,
          location,
          blog,
          bio,
          twitter_username,
          avatar_url,
          gravatar_id,
          company,
          email,
          name,
        }: User = profile

        const user = await prisma.user.upsert({
          where: {
            email: profile.email,
          },
          create: {
            name,
            login,
            location,
            blog,
            bio,
            twitter_username,
            avatar_url,
            gravatar_id,
            company,
            email,
          },
          update: {
            name,
            login,
            location,
            blog,
            bio,
            twitter_username,
            avatar_url,
            gravatar_id,
            company,
            email,
          },
        })
        token.user = {
          ...(token?.user ?? {}),
          prismaId: user.id,
          githubAccessToken: account.access_token,
          username: profile.login,
        }
        token.accessToken = account.access_token
      }
      return token
    },
    async session({ session, token }: any) {
      session.accessToken = token.accessToken
      session.user.username = token.user.username
      session.user.githubAccessToken = token.user.githubAccessToken
      session.user.prismaId = token.user.prismaId
      return session
    },
  },
  logger: {
    error(code: any, metadata: any) {
      console.error('error[next-auth]:', code, metadata)
    },
  },
}

export default NextAuth(authOptions)
