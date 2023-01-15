import { GetStartedButton } from '../components/Home/GetStartedButton'
import { HomeLayout } from '../components/Home/HomeLayout'
import { Typography, Box } from '@mui/material'
import { useSession } from 'next-auth/react'


const LogoSection = () => {
  return (
    <></>
  )
}

export default function Home() {
  const { data } = useSession()
  return (
    <HomeLayout>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100vh',
          margin: 0
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
