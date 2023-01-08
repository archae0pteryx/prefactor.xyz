import Head from 'next/head'
import { useSession, signOut, signIn } from 'next-auth/react'
import { Typography, Button, Box } from '@mui/material'
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
      <Box
        sx={{
          position: 'fixed',
          top: 0,
          left: 0,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100%',
          width: '100%',
        }}
      >
        <Box display="flex" alignItems="center" gap={4}>
          <Box>
            <Typography variant="h3" padding={0} margin={0}>
              Prefactor
            </Typography>
            <Typography>Code as prose</Typography>
          </Box>
          <Box>
            {data ? (
              <>

              <Button color="secondary" size="large" onClick={() => router.push('/profile')} >
                Profile
              </Button>
              <Button color="secondary" size="large" onClick={() => signOut()}>
                signout
              </Button>
              </>
            ) : (
              <Button
                color="secondary"
                size="large"
                variant="outlined"
                onClick={() =>
                  signIn('github', {
                    callbackUrl: `${window.location.origin}/profile`,
                  })
                }
              >
                login
              </Button>
            )}
          </Box>
        </Box>
      </Box>
    </>
  )
}
