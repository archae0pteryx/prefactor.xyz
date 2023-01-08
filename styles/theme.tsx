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
      primary: {
        main: '#455a64',
        light: '#718792',
        dark: '#1c313a',
        contrastText: '#fafafa',
      },
      secondary: {
        main: '#b0bec5',
        light: '#e2f1f8',
        dark: '#808e95',
        contrastText: '#ffffff',
      },
      text: {
        primary: '#fafafa',
        secondary: '#b0bec5',
      },
    },
    typography: {
      fontFamily: 'montserrat',
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
