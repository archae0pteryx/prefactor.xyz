import { Container, Typography, Button } from '@mui/material'
import { useSession, signIn } from 'next-auth/react'
import { NavLayout } from '../components/Navigation/NavLayout'

export default function Apply() {
  const { data } = useSession()
  return (
    <NavLayout>
      <Container
        sx={{
          margin: 5,
        }}
      >
        <Typography variant="h6">Apply for developer account</Typography>
        {!data ? (
          <Button
            variant="contained"
            size="small"
            onClick={() =>
              signIn('github', {
                callbackUrl: `${window.location.origin}/apply`,
              })
            }
          >
            Sign in with Github
          </Button>
        ) : (
          <>{JSON.stringify(data)}</>
        )}
      </Container>
    </NavLayout>
  )
}
