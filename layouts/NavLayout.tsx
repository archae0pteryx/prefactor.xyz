import React from 'react'
import { Navigation } from '../components/Navigation'

export function NavLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navigation />
      {children}
    </>
  )
}
