// import { hashPassword } from '../../lib/pbkdf2'
// import { Context } from '../context'

// // interface IUser {}

// export async function signupUserMutation(
//   _: any,
//   { email, password }: { email: string; password: string },
//   ctx: Context
// ) {
//   try {
//     // first check if user exists
//     const foundUser = await ctx.prisma.user.findUnique({
//       where: {
//         email,
//       },
//     })

//     if (foundUser) {
//       throw new Error('Bad signup input')
//     }

//     // const { salt, hash } = hashPassword(password)

//     return ctx.prisma.user.create({
//       data: {
//         email,
//         // passwordSalt: salt,
//         // passwordHash: hash,
//       },
//     })
//   } catch (err) {
//     // throw new ApolloError('Can not create user')
//   }
// }
export {}
