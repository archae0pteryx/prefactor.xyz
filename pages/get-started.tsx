import React from 'react'
import { Box, Container, Typography, useTheme } from '@mui/material'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'

const ACCOUNT_TYPES = {
  customer: 'CUSTOMER',
  developer: 'DEVELOPER',
}

const CUSTOMER_REASONS = {
  consult: 'CONSULT',
  hire: 'HIRE',
  mentorship: 'MENTORSHIP',
  technicalHelp: 'TECHNICAL_HELP',
  other: 'OTHER',
}

const DEVELOPER_REASONS = {
  apply: 'APPLY',
  info: 'INFO',
  other: 'OTHER',
}

export default function GetStartedPage() {
  const [accountType, setAccountType] = React.useState('')
  const [devInfo, setDevInfo] = React.useState('')
  const [customerInfo, setCustomerInfo] = React.useState('')
  const theme = useTheme()

  return (
    <Box marginTop={20}>
      <Container maxWidth="md">
        <Box marginY={theme.spacing(5)}>
          <Typography variant="h4">Let&apos;s get started.</Typography>
        </Box>
        <Typography variant="h5" marginY={theme.spacing(2)}>
          I am a
        </Typography>
        <SelectMenu value={accountType} setValue={setAccountType}>
          <MenuItem value={ACCOUNT_TYPES.customer}>
            <Typography>Customer</Typography>
          </MenuItem>
          <MenuItem value={ACCOUNT_TYPES.developer}>
            <Typography>Developer</Typography>
          </MenuItem>
        </SelectMenu>
        {accountType && (
          <>
            <Typography variant="h5" marginY={theme.spacing(2)}>
              Looking for
            </Typography>
            {accountType === ACCOUNT_TYPES.developer ? (
              <DeveloperSelectMenu value={devInfo} setValue={setDevInfo} />
            ) : (
              <CustomerSelectMenu
                value={customerInfo}
                setValue={setCustomerInfo}
              />
            )}
          </>
        )}
      </Container>
    </Box>
  )
}

const CustomerSelectMenu = ({ value, setValue }: any) => (
  <SelectMenu value={value} setValue={setValue}>
    <MenuItem value={CUSTOMER_REASONS.consult}>Consultation</MenuItem>
    <MenuItem value={CUSTOMER_REASONS.mentorship}>Mentorship</MenuItem>
    <MenuItem value={CUSTOMER_REASONS.technicalHelp}>Technical Helop</MenuItem>
    <MenuItem value={CUSTOMER_REASONS.other}>Other</MenuItem>
  </SelectMenu>
)

const DeveloperSelectMenu = ({ value, setValue }: any) => (
  <SelectMenu value={value} setValue={setValue}>
    <MenuItem value={DEVELOPER_REASONS.apply}>Verification</MenuItem>
    <MenuItem value={DEVELOPER_REASONS.info}>More Info</MenuItem>
    <MenuItem value={DEVELOPER_REASONS.other}>Other reason</MenuItem>
  </SelectMenu>
)

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
    <FormControl fullWidth>
      <Select
        value={value}
        onChange={(e) => setValue(e.target.value)}
        fullWidth
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
              background: 'rgba(33,37,41,1)',
            },
          },
        }}
      >
        {children}
      </Select>
    </FormControl>
  )
}
