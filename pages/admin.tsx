import { useSession } from 'next-auth/react'

export default function AdminDashboard() {
  const { data: session } = useSession()
  return <pre>{JSON.stringify(session, null, 2)}</pre>
}

AdminDashboard.auth = true
