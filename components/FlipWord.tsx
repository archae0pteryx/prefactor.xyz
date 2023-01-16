import { useSpring, animated, easings } from '@react-spring/web'
import React from 'react'

export function FlipWord({ children, delay = 1000, ...springConfig }: { delay?: number, children: React.ReactNode }) {
  const styles = useSpring({
    from: {
      opacity: 0,
      transform: 'rotateX(180deg)',
    },
    to: {
      opacity: 1,
      transform: 'rotateX(360deg)',
    },
    config: {
      easing: easings.steps(1),
      clamp: true,
      ...springConfig,
    },
    delay: delay
  })

  return <animated.div style={styles}>{children}</animated.div>
}
