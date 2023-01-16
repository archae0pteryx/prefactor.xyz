import { Box, Button } from '@mui/material'
import React from 'react'
import { LoginButton } from './LoginButton';

export function HomeLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Box padding={2} display='flex' justifyContent="flex-end"><LoginButton /><Button>color</Button></Box>
      {children}
    </>
  )
}
