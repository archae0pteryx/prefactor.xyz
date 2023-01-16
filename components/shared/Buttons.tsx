import { Button, ButtonProps } from '@mui/material'
import React from 'react'
import Link from 'next/link'

interface IButton {
  children: React.ReactNode
  [key: string]: any
}

const SMALL_BTN = {
  fontSize: '0.4rem',
  padding: '0.4rem',
}

const MED_BTN = {
  fontSize: '0.6rem',
  padding: '0.6rem',
}

const ButtonBase = (props: ButtonProps) => (
  <Button color="info" {...props}>
    {props.children}
  </Button>
)

const LinkButton = (props: ButtonProps & { href?: string }) => (
  <Link href={props.href || ''}>
    <ButtonBase {...props}>{props.children}</ButtonBase>
  </Link>
)

export function SmallButton({ children, ...props }: IButton) {
  const { href, sx, ...rest } = props
  if (href) {
    return (
      <LinkButton
        sx={{
          ...SMALL_BTN,
          ...sx,
        }}
      >
        {children}
      </LinkButton>
    )
  }
  return (
    <ButtonBase
      sx={{
        ...SMALL_BTN,
        ...sx,
      }}
      {...rest}
    >
      {children}
    </ButtonBase>
  )
}
export function MedButton({ children, ...props }: IButton) {
  return (
    <Button color="info" sx={MED_BTN} {...props}>
      {children}
    </Button>
  )
}
