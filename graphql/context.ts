import prisma from '../prisma/client'
import { PrismaClient } from '@prisma/client'

export type Context = {
  prisma: PrismaClient
}

// eslint-disable-next-line no-unused-vars
export async function createContext({ req, res }: any): Promise<Context> {
  return {
    prisma,
  }
}
