import { Apollo } from '../lib/apollo'
import { Backdrop, CircularProgress } from '@mui/material'
import { SessionProvider, useSession } from 'next-auth/react'
import { Theme } from '../styles/theme'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import type { AppProps } from 'next/app'
import type { NextComponentType } from 'next'

import '../styles/global.css'

function Loading({ loading }: { loading: boolean }) {
  return (
    <Backdrop
      sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 10 }}
      open={loading}
    >
      <CircularProgress color="inherit" />
    </Backdrop>
  )
}

interface IAuthWrapperProps {
  children: any
  routeLoading: boolean
}

function AuthWrapper({ children, routeLoading }: IAuthWrapperProps) {
  const { status } = useSession({ required: true })

  if (status === 'loading' || routeLoading) {
    return <Loading loading={status === 'loading'} />
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

  const [loading, setLoading] = useState<boolean>(false)

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
    <Theme>
      <SessionProvider session={session}>
        <Apollo>
          <>
            {loading ? (
              <Loading loading={loading} />
            ) : Component.auth ? (
              <AuthWrapper routeLoading={loading}>
                <Component {...pageProps} />
              </AuthWrapper>
            ) : (
              <Component {...pageProps} />
            )}
          </>
        </Apollo>
      </SessionProvider>
    </Theme>
  )
}
