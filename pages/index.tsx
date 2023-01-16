import { Typography, Button, Grid } from '@mui/material'
import { FlipWord } from '../components/FlipWord'
import React from 'react'
import { useRouter } from 'next/router'

const FlipButton = ({
  children,
  href,
  delay,
}: {
  children: React.ReactNode
  href: string
  delay?: number
}) => {
  const router = useRouter()
  return (
    <FlipWord delay={delay}>
      <Button
        color="warning"
        variant="outlined"
        fullWidth
        onClick={() => router.push(href)}
      >
        <Typography>{children}</Typography>
      </Button>
    </FlipWord>
  )
}

export default function Home() {
  return (
    <Grid container spacing={1} minHeight="100vh">
      <Grid container item xs={12}></Grid>
      <Grid
        container
        item
        xs
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Grid
          item
          display="flex"
          flexDirection="column"
          sx={{
            margin: {
              xs: 5,
            },
          }}
        >
          <Typography
            variant="h3"
            marginLeft={0.5}
            marginBottom={4}
            sx={{
              fontSize: {
                xs: '2.7rem',
                marginLeft: 0,
              },
            }}
          >
            Prefactor
          </Typography>
          <Grid container spacing={1}>
            <Grid
              item
              xs={12}
              md="auto"
              sx={{
                textAlign: {
                  xs: 'center',
                },
              }}
            >
              <FlipButton href="/services?review=true">Code Review</FlipButton>
            </Grid>
            <Grid
              item
              xs={12}
              md="auto"
              sx={{
                textAlign: {
                  xs: 'center',
                },
              }}
            >
              <FlipButton href="/services?mentorship=true" delay={1500}>
                Mentorship
              </FlipButton>
            </Grid>
            <Grid
              item
              xs={12}
              md="auto"
              sx={{
                textAlign: {
                  xs: 'center',
                },
              }}
            >
              <FlipButton href="/service?consult=true" delay={2000}>
                Consultation
              </FlipButton>
            </Grid>
            <Grid
              item
              xs={12}
              md="auto"
              sx={{
                textAlign: {
                  xs: 'center',
                },
              }}
            >
              <FlipButton href="/about" delay={2500}>
                Dev Ops
              </FlipButton>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid container item xs={12}>
        <Grid item xs></Grid>
      </Grid>
    </Grid>
  )
}
