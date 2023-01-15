import { Button, useTheme } from '@mui/material'
import { signIn } from 'next-auth/react'

export function LoginButton() {
  const theme = useTheme()
  return (
    <Button
      color="secondary"
      sx={{
        position: 'fixed',
        fontSize: 10,
        zIndex: theme.zIndex.appBar,
      }}
      onClick={() =>
        signIn('github', {
          callbackUrl: `${window.location.origin}/profile`,
        })
      }
    >
      login
    </Button>
  )
}
