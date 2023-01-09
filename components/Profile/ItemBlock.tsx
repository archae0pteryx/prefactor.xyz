import { Grid, Paper, useTheme } from '@mui/material'
import React from 'react'

export const GridItem = ({
  children,
  ...rest
}: {
  children: React.ReactNode
}) => {
  return (
    <Grid item xs={12} sm={6} md={4} lg={3} {...rest}>
      <ItemBlock>{children}</ItemBlock>
    </Grid>
  )
}

export function ItemBlock({
  children,
  ...rest
}: {
  children: React.ReactNode
}) {
  const theme = useTheme()
  return <Paper sx={{
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    color: theme.palette.text.secondary,
    height: '100%'
  }} {...rest}>{children}</Paper>
}
