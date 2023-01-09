import { Container, Typography } from '@mui/material'
import { useSession } from 'next-auth/react'
import { NavLayout } from '../components/Navigation/NavLayout'

export default function SettingsPage() {
  const { data: session } = useSession()
  return (
    <NavLayout>
      <Container>
        <Typography>Settings</Typography>
        <pre>{JSON.stringify(session, null, 2)}</pre>
      </Container>
    </NavLayout>
  )
}

SettingsPage.auth = true
