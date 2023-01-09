import React from 'react'
import { Button } from '@mui/material'
import { useSession } from 'next-auth/react'

export function LoginButton({ children }: { children: React.ReactNode }) {
    const { data } = useSession()

  return data ? <></> : (
    <Button color="secondary">
      {children}
    </Button>
  )
}
