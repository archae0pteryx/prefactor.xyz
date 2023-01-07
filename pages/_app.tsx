import type { AppProps } from 'next/app'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
import { useRouter } from 'next/router'
import type { NextComponentType } from 'next'
import React, { useEffect, useState } from 'react'
import { LoadOverlay } from '../components/LoadOverlay'
import { SessionProvider, useSession } from 'next-auth/react'

import '../styles/globals.css'

const client = new ApolloClient({
  uri: `${process.env.VERCEL_URL || 'http://localhost:3000'}/api/graphql`,
  cache: new InMemoryCache(),
})
function Auth({ children }: any) {
  const { status } = useSession({ required: true })

  if (status === 'loading') {
    return <p>loading...</p>
  }

  return children
}

type AuthAppProps = AppProps & {
  Component: NextComponentType & { auth?: boolean }
}

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AuthAppProps) {
  const router = useRouter()

  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const handleStart = (url: string) =>
      url !== router.asPath && setLoading(true)
    const handleComplete = (url: string) =>
      url === router.asPath && setLoading(false)

    router.events.on('routeChangeStart', handleStart)
    router.events.on('routeChangeComplete', handleComplete)
    router.events.on('routeChangeError', handleComplete)

    return () => {
      router.events.off('routeChangeStart', handleStart)
      router.events.off('routeChangeComplete', handleComplete)
      router.events.off('routeChangeError', handleComplete)
    }
  })
  return (
    <SessionProvider session={session}>
      <ApolloProvider client={client}>
        {loading ? (
          <LoadOverlay />
        ) : (
          <>
            {Component.auth ? (
              <Auth>
                <Component {...pageProps} />
              </Auth>
            ) : (
              <Component {...pageProps} />
            )}
          </>
        )}
      </ApolloProvider>
    </SessionProvider>
  )
}
