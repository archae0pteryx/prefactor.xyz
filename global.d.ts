/* eslint-disable no-unused-vars */
import { PrismaClient } from '@prisma/client'
declare global {
  var prisma: PrismaClient // This must be a `var` and not a `let / const`
}
