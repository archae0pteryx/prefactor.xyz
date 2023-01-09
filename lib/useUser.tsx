import { createContext, useContext, useEffect } from 'react'
import React from 'react'
import { useSession } from 'next-auth/react'
import { useLazyQuery } from '@apollo/client'
import { USER_QUERY } from '../graphql/queries/user'

const UserContext = createContext({})

function UserProvider({ children }: { children: React.ReactNode }) {
  const [fetchFindUser, { data: prismaData, error, loading }] =
    useLazyQuery(USER_QUERY)
  const { data, status }: any = useSession()

  useEffect(() => {

    if (data?.user?.prismaId) {
      fetchFindUser({ variables: { id: data?.user?.prismaId } })
    }
    // eslint-disable-next-line
  }, [data?.user?.prismaId])

  const prismaUser = prismaData?.findUser || {}

  return (
    <UserContext.Provider
      value={{
        ...prismaUser,
        error: error?.message || '',
        loading: loading || status === 'loading' || false,
      }}
    >
      {children}
    </UserContext.Provider>
  )
}

const useUser = () => useContext(UserContext)

export { UserProvider, useUser }
