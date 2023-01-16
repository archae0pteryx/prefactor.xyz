import React from 'react'
import { Button } from '@mui/material'
import Link from 'next/link'

export function GetStartedButton({ ...props }) {
  return (
    <Link href="get-started" passHref>
      <Button variant="contained" size="small" {...props}>Get Started</Button>
    </Link>
  )
}
