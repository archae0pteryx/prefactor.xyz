import React from 'react'
import {
  createTheme,
  ThemeProvider,
  responsiveFontSizes,
} from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import '@fontsource/montserrat'

const theme = responsiveFontSizes(
  createTheme({
    palette: {
      mode: 'dark',
      background: {
        default: 'rgba(33,37,41,1)',
        paper: '#343A40',
      },
      primary: {
        main: '#DEE2E6',
        contrastText: '#1c313a',
      },
      secondary: {
        main: '#ADB5BD',
        contrastText: '#1c313a',
      },
      text: {
        primary: '#F8F9FA',
        secondary: '#CED4DA',
      },
      error: {
        main: '#ef233c',
        contrastText: '#fff',
      },
      warning: {
        main: '#ff8800',
        contrastText: '#fff',
      },
      info: {
        main: '#8d99ae',
        contrastText: '#fff',
      },
      success: {
        main: '#90a955',
        contrastText: '#fff',
      },
    },
    typography: {
      fontFamily: 'montserrat',
      fontSize: 12,
    },
  })
)

export const Theme = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  )
}
