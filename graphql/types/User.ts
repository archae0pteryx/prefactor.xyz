// import {
//   objectType,
//   mutationType,
//   stringArg,
//   nonNull,
//   enumType,
//   extendType,
//   nullable,
// } from 'nexus'
// import { signupUserMutation } from '../mutations/signup'
// import { allUsersQuery } from '../queries/allUsers'

// const AccountTypeEnum = enumType({
//   name: 'AccountEnum',
//   members: ['REVIEWER', 'SUBMITTER'],
// })

// export const User = objectType({
//   name: 'User',
//   definition(t) {
//     t.string('id')
//     t.string('email')
//     t.string('passwordSalt')
//     t.string('passwordHash')
//     t.field('accountType', { type: AccountTypeEnum })
//     t.field('createdAt', { type: nonNull('Date') })
//     t.field('updatedAt', { type: nonNull('Date') })
//     t.nullable.field('github', {
//       type: nullable('Github'),
//       resolve: async (parent, args, ctx) => {
//         return await ctx.prisma.github.findUnique({
//           where: { id: parent.id || '' },
//         }) || {}
//       },
//     })
//     t.list.field('code', {
//       type: 'Code',
//       resolve: (parent, _args, ctx) => {
//         return ctx.prisma.code.findMany({
//           where: { userId: parent.id || '' },
//         })
//       },
//     })
//   },
// })

// export const UserQuery = extendType({
//   type: 'Query',
//   definition(t) {
//     t.list.field('allUsers', {
//       type: 'User',
//       resolve: allUsersQuery,
//     })
//   },
// })

// export const UserMutation = mutationType({
//   definition(t) {
//     t.field('signUp', {
//       type: 'User',
//       args: {
//         email: nonNull(stringArg()),
//         password: nonNull(stringArg()),
//       },
//       resolve: signupUserMutation,
//     })
//   },
// })
export {}
