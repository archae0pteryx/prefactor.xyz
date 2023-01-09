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
        main: '#616161',
        light: '#8e8e8e',
        dark: '#373737',
        contrastText: '#eeeeee',
      },
      secondary: {
        main: '#90a4ae',
        light: '#c1d5e0',
        dark: '#62757f',
        contrastText: '#1c313a',
      },
      text: {
        primary: '#cfd8dc',
        secondary: '#eeeeee',
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
