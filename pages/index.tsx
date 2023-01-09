import { GetStartedButton } from '../components/Home/GetStartedButton'
import { HomeLayout } from '../components/Home/HomeLayout'
import { Typography, Box } from '@mui/material'
import { useSession } from 'next-auth/react'

export default function Home() {
  const { data } = useSession()
  return (
    <HomeLayout>
      <Box
        sx={{
          position: 'fixed',
          top: 0,
          left: 0,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100%',
          width: '100%',
        }}
      >
        <Box display="flex" alignItems="flex-end" gap={4}>
          <Box>
            <Typography variant="h3">Prefactor</Typography>
            <Typography paddingLeft={0.5} fontSize={12}>
              Developers as a service
            </Typography>
          </Box>
          {!data && <GetStartedButton />}
        </Box>
      </Box>
    </HomeLayout>
  )
}
