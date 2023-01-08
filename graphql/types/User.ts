import { enumType, extendType, nonNull, objectType, stringArg } from 'nexus'
import { findUserQuery } from '../queries/allUsers'

const RoleEnum = enumType({
  name: 'RoleEnum',
  members: ['USER', 'REVIEWER', 'ADMIN'],
})

export const User = objectType({
  name: 'User',
  definition(t) {
    t.string('id')
    t.string('name')
    t.string('login')
    t.string('blog')
    t.string('bio')
    t.string('twitter_username')
    t.string('avatar_url')
    t.string('gravatar_id')
    t.string('company')
    t.string('email')
    t.field('emailVerified', { type: 'Date' })
    t.string('image')
    t.field('role', { type: RoleEnum })
    t.field('createdAt', { type: nonNull('Date') })
    t.field('updatedAt', { type: nonNull('Date') })
    // t.list.field('accounts', {
    //   type: 'Account',
    // })
    // t.list.field('sessions', {
    //   type: 'Session',
    // })
  },
})

export const UserQuery = extendType({
  type: 'Query',
  definition(t) {
    t.field('findUser', {
      type: User,
      args: {
        id: nonNull(stringArg()),
      },
      resolve: findUserQuery,
    })
  },
})

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
