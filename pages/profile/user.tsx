import { Alert, Skeleton, Typography, Button } from '@mui/material'
import AppLayout from '../../components/AppLayout'
import React, { useEffect } from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import { useSession } from 'next-auth/react'
import { useLazyQuery } from '@apollo/client'
import { User } from '@prisma/client'
import { NavLayout } from '../../components/Navigation/NavLayout'
import { ItemBlock, GridItem } from '../../components/Profile/ItemBlock'
import { UserAvatar } from '../../components/Profile/Avatar'
import { USER_QUERY } from '../../graphql/queries/user'

function ProfileInfoItem(prismaUser: User) {
  return (
    <ItemBlock>
      <Typography>{prismaUser?.name || prismaUser.email}</Typography>
    </ItemBlock>
  )
}

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
            <ItemBlock>{error.message}</ItemBlock>
          </Grid>
        )}
        <GridItem>
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
        </GridItem>
        <GridItem>
          <UserAvatar isLoading={isLoading} image={user.image} />
        </GridItem>
        <GridItem>
          <ItemBlock>
            <Button variant="contained">Apply for developer</Button>
          </ItemBlock>
        </GridItem>
      </Grid>
    </Box>
  )
}

export default function UserProfilePage() {
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

UserProfilePage.auth = true
