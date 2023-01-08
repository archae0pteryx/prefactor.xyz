import { Alert, Avatar, Skeleton, Typography } from '@mui/material'
import AppLayout from '../layouts/AppLayout'
import React, { useEffect } from 'react'
import { styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid'
import { useSession } from 'next-auth/react'
import { gql, useLazyQuery } from '@apollo/client'
import { User } from '@prisma/client'
import { NavLayout } from '../layouts/NavLayout'

function ProfileInfoItem(prismaUser: User) {
  return (
    <Item>
      <Typography>{prismaUser?.name || prismaUser.email}</Typography>
    </Item>
  )
}

const Item = styled(Paper)(({ theme }) => ({
  // backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
  color: theme.palette.text.secondary,
  height: '100%',
}))

const USER_QUERY = gql`
  query UserQuery($id: String!) {
    findUser(id: $id) {
      name
      role
      bio
      blog
      avatar_url
      login
      image
      id
      gravatar_id
      emailVerified
      email
      createdAt
      company
      twitter_username
      updatedAt
    }
  }
`

export function ProfileGrid() {
  const [findUser, { data: prismaData, error, loading }] =
    useLazyQuery(USER_QUERY)
  const { data, status } = useSession<any>()
  const user = data?.user as any
  // console.log({ status, user })
  // console.log({ prismaData })

  useEffect(() => {
    if (user?.prismaId) {
      findUser({ variables: { id: user?.prismaId } })
    }
    // eslint-disable-next-line
  }, [user?.prismaId])

  const isLoading = loading || status === 'loading'
  const prismaUser = prismaData?.findUser || {}
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          {!user?.emailVerified && (
            <Alert severity="error" variant="outlined">
              Please verify your email
            </Alert>
          )}
        </Grid>
        {error?.message && (
          <Grid item xs>
            <Item>{error.message}</Item>
          </Grid>
        )}
        <Grid item xs>
          {!isLoading ? (
            <ProfileInfoItem {...prismaUser} />
          ) : (
            <Skeleton
              animation="wave"
              variant="rounded"
              width="100%"
              height="100%"
            />
          )}
        </Grid>
        <Grid item xs={2}>
          {!isLoading ? (
            <Avatar
              alt="user avatar"
              src={user?.image || 'https://www.fillmurray.com/400/400'}
              sx={{ width: 100, height: 100 }}
            />
          ) : (
            <Skeleton
              animation="wave"
              variant="circular"
              width={100}
              height={100}
            />
          )}
        </Grid>
        <Grid item xs={12}>
          <Item>xs=4</Item>
        </Grid>
      </Grid>
    </Box>
  )
}

export default function ProfilePage() {
  return (
    <>
      <NavLayout>
        <AppLayout>
          <Box marginTop={2}>
            <ProfileGrid />
          </Box>
        </AppLayout>
      </NavLayout>
    </>
  )
}

ProfilePage.auth = true
