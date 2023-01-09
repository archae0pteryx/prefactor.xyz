import React from 'react'
import { Button } from '@mui/material'
import Link from 'next/link'

export function GetStartedButton({ ...props }) {
  return (
    <Link href="get-started" passHref>
      <Button color="secondary" sx={{
        transform: 'translateY(9px)'
      }}
      {...props}
      >
        Get Started
      </Button>
    </Link>
  )
}
