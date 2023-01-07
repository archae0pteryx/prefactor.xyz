import crypto from 'crypto'

const ITERATIONS = 872791
const DIGEST = 'sha512'
const KEY_LEN = 65

export function hashPassword(password: string) {
  const salt = crypto.randomBytes(128).toString('base64')
  const hash = crypto.pbkdf2Sync(password, salt, ITERATIONS, KEY_LEN, DIGEST)

  return {
    salt: salt,
    hash: hash.toString(),
    iterations: ITERATIONS,
  }
}

export function verifyPassword(password: string, salt: string, hash: string) {
  const newHash = crypto.pbkdf2Sync(password, salt, ITERATIONS, KEY_LEN, DIGEST)
  return hash === newHash.toString()
}
