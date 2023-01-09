import React from 'react'
import { Box, Container, Typography, Button, useTheme } from '@mui/material'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import Grid from '@mui/material/Grid'
import { signIn, useSession } from 'next-auth/react'

const ACCOUNT_TYPES = {
  customer: 'CUSTOMER',
  developer: 'DEVELOPER',
}

export default function GetStartedPage() {
  const { data } = useSession()
  const theme = useTheme()
  const [accountType, setAccountType] = React.useState<string>('')

  const isDev = accountType === ACCOUNT_TYPES.developer
  return (
    <Box marginTop={20}>
      <Container maxWidth="md">
        {data ? (
          <Typography>Adjust your account type?</Typography>
        ) : (
          <>
            <Box marginY={theme.spacing(5)} textAlign="center">
              <Typography variant="h4">Let&apos;s get started</Typography>
            </Box>
            <WhoIsThisMenu value={accountType} setValue={setAccountType} />
            {accountType && (
              <Box marginY={theme.spacing(5)}>
                {isDev ? <DeveloperMessage /> : <CustomerMessage />}
              </Box>
            )}
          </>
        )}
      </Container>
    </Box>
  )
}

function CustomerMessage() {
  return (
    <Grid container rowGap={3} alignItems="center">
      <Grid item xs={12}>
        <Typography variant="h6">
          In order to browse available developers for your project, you will
          need a Github account.
        </Typography>
      </Grid>
      <Grid item xs>
        <Typography variant="h6" color="secondary">
          Click here to sign in or create one
        </Typography>
      </Grid>
      <Grid item xs={2}>
        <Button
          variant="contained"
          onClick={() =>
            signIn('github', {
              callbackUrl: `${window.location.origin}/profile/user`,
            })
          }
        >
          Sign in
        </Button>
      </Grid>
    </Grid>
  )
}

function DeveloperMessage() {
  const theme = useTheme()
  return (
    <Box>
      <Typography marginBottom={3}>
        In order to apply for a consulting account, we need to verify that
        you&apos;re not a bot and have contributed to a larger community. You
        must have:
      </Typography>
      <Typography>1. A github account</Typography>
      <Typography>2. A Stack Exchange account</Typography>
      <Typography>
        3. A social media account. (twitter, facebook, or reddit)
      </Typography>
      <Grid
        container
        marginY={theme.spacing(5)}
        alignItems="center"
        justifyContent="center"
      >
        <Grid item>
          <Button
            variant="outlined"
            color="secondary"
            onClick={() =>
              signIn('github', {
                callbackUrl: `${window.location.origin}/apply`,
              })
            }
          >
            Get verified now
          </Button>
        </Grid>
      </Grid>
    </Box>
  )
}

function WhoIsThisMenu({
  value,
  setValue,
}: {
  value: string
  // eslint-disable-next-line no-unused-vars
  setValue: (_: string) => void
}) {
  return (
    <Grid container alignItems="center">
      <Grid item xs={12} md={2}>
        <Typography variant="h5">I am</Typography>
      </Grid>
      <SelectMenu value={value} setValue={setValue}>
        <MenuItem value={ACCOUNT_TYPES.developer}>
          <Typography variant="h5">a developer</Typography>
        </MenuItem>
        <MenuItem value={ACCOUNT_TYPES.customer}>
          <Typography variant="h5">in search of a developer</Typography>
        </MenuItem>
      </SelectMenu>
    </Grid>
  )
}

function SelectMenu({
  children,
  value,
  setValue,
}: {
  children: React.ReactNode
  value: string
  // eslint-disable-next-line no-unused-vars
  setValue: (_: string) => void
}) {
  return (
    <Grid item xs>
      <FormControl fullWidth>
        <Select
          value={value}
          onChange={(e) => setValue(e.target.value)}
          autoWidth
          MenuProps={{
            anchorOrigin: {
              vertical: 'bottom',
              horizontal: 'left',
            },
            transformOrigin: {
              vertical: 'top',
              horizontal: 'left',
            },
            MenuListProps: {
              sx: {
                background: '#121212',
              },
            },
          }}
        >
          {children}
        </Select>
      </FormControl>
    </Grid>
  )
}
