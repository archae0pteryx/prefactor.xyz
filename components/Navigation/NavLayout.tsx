import React from 'react'
import { Navigation } from './NavMenu'

export function NavLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navigation />
      {children}
    </>
  )
}
