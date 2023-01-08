import React from 'react'
import { Container } from '@mui/material'

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return <Container maxWidth="md">{children}</Container>
}
