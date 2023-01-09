import React from 'react'
import Head from 'next/head'

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Head>
        <title>prefactor</title>
        <meta name="description" content="prefactor" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {children}
    </>
  )
}
