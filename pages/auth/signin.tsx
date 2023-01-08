
import React from 'react'
import { Box, Typography } from '@mui/material'
import { useRouter } from 'next/router'

const Centered = ({ children }: { children: React.ReactNode }) => (
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
    {children}
  </Box>
)

export default function SignInPage() {
  const router = useRouter()
  const { error, error_description } = router.query
  if (error) {
    return (
      <Centered>
        <Typography variant="h6" color="error">
          There was an error logging you in
        </Typography>
        <Typography color="warning.main">{error_description}</Typography>
      </Centered>
    )
  }
  return (
    <Centered>
      <Typography>Signing in...</Typography>
    </Centered>
  )
}

