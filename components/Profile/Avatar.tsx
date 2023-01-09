import { Avatar, Skeleton } from '@mui/material'

export function UserAvatar({ isLoading, image, ...rest }: { isLoading: boolean, image: string }) {
  return !isLoading ? (
    <Avatar
      alt="user avatar"
      src={image || 'https://www.fillmurray.com/400/400'}
      sx={{ width: 100, height: 100 }}
      {...rest}
    />
  ) : (
    <Skeleton animation="wave" variant="circular" width={100} height={100} />
  )
}
