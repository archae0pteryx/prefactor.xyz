import { Context } from '../context'

export async function allUsersQuery(_parent: any, _args: any, ctx: Context) {
  return ctx.prisma.user.findMany() || {}
}
