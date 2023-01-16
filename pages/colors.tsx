import { GetStartedButton } from '../components/Home/GetStartedButton'
import { HomeLayout } from '../components/Home/HomeLayout'
import { Typography, Box, Button, Paper } from '@mui/material'
import { useSession } from 'next-auth/react'


export default function ColorsPage() {
  const { data } = useSession()
  return (
    <HomeLayout>
      <Box display="flex" flexDirection="column" alignItems="flex-end" gap={4}>
        <Box>
          <Typography variant="h3">Prefactor</Typography>
          <Typography paddingLeft={0.5} fontSize={12}>
            Developers as a service
          </Typography>
        </Box>
        {!data && <GetStartedButton />}
        <Paper
          sx={{
            padding: 5,
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            flexWrap: 'wrap',
          }}
        >
          <Typography>default color text</Typography>
          <Typography color="primary">primary color text</Typography>
          <Typography color="secondary">secondary color text</Typography>
          <Button variant="outlined" color="secondary">
            secondary
          </Button>
          <Button variant="contained" color="secondary">
            secondary
          </Button>
          <Button variant="outlined">primary</Button>
          <Button variant="contained">primary</Button>
          <Button variant="contained" color="error">
            err
          </Button>
          <Button variant="contained" color="warning">
            warn
          </Button>
          <Button variant="contained" color="info">
            info
          </Button>
          <Button variant="contained" color="success">
            success
          </Button>
        </Paper>
      </Box>
    </HomeLayout>
  )
}
