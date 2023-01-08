import React from 'react'
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'

export const client = new ApolloClient({
  uri: `${process.env.VERCEL_URL || 'http://localhost:3000'}/api/graphql`,
  cache: new InMemoryCache(),
})

export function Apollo({ children }: { children: React.ReactNode }) {
  return <ApolloProvider client={client}>{children}</ApolloProvider>
}
