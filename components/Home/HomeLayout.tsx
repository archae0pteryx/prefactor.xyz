import { Box } from '@mui/material'
import React from 'react'
import { LoginButton } from './LoginButton';

export function HomeLayout({ children }: { children: React.ReactNode }) {
  return (
    <Box>
      <Box padding={2} display='flex' justifyContent="flex-end"><LoginButton /></Box>
      {children}
    </Box>
  )
}
