import { GraphQLError } from 'graphql'
import { Context } from '../context'
import {User} from '@prisma/client'

export async function allUsersQuery(_parent: any, _args: any, ctx: Context) {
  return ctx.prisma.user.findMany() || {}
}

export async function findUserQuery(_parent: any, args: any, ctx: Context): Promise<User> {
  const found =
    await ctx.prisma.user.findUnique({
      where: {
        id: args.id,
      },
    })

  if (!found) {
    throw new GraphQLError('User not found')
  }

  return found
}
