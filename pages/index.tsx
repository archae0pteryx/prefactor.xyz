import Head from 'next/head'
import { useSession, signOut } from 'next-auth/react'
import styles from '../styles/Home.module.css'
import { useRouter } from 'next/router'

export default function Home() {
  const { data } = useSession()
  const router = useRouter()

  return (
    <>
      <Head>
        <title>prefactor</title>
        <meta name="description" content="prefactor" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.main}>
        <h1>Prefactor</h1>
        <h2>Some description</h2>
        {data ? (
          <button onClick={() => signOut()}>signout</button>
        ) : (
          <button onClick={() => router.push('/api/auth/signin')}>login</button>
        )}
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </div>
    </>
  )
}
