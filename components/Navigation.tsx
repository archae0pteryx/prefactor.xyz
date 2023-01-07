import Link from 'next/link'
import styles from './Navigation.module.css'

export function Navigation() {
  return <div className={styles.container}>
    <Link href="/login">Login</Link>
    <Link href="/signup">Sign Up</Link>
  </div>
}
