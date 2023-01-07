import { gql, useLazyQuery } from '@apollo/client'
import { useState } from 'react'
import { LoadOverlay } from '../components/LoadOverlay'

import styles from '../styles/Home.module.css'

const FETCH_LOGIN = gql`
  query Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      id
    }
  }
`

// const AUTHORIZATION_URL = 'https://github.com/login/oauth/authorize'

export default function LoginPage() {
  const [fetchLogin, { loading, error, data }] = useLazyQuery(FETCH_LOGIN)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async () => {
    await fetchLogin({
      variables: {
        email,
        password,
      },
    })
  }

  return (
    <div className={styles.main}>
      {loading && <LoadOverlay />}
      {error && <p>{error.message}</p>}
      {JSON.stringify(data)}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          margin: 50,
          gap: 20,
        }}
      >
        <input value={email} onChange={(e) => setEmail(e.target.value)} />
        <input value={password} onChange={(e) => setPassword(e.target.value)} />
        <button
          style={{
            padding: 10,
          }}
          onClick={handleSubmit}
        >
          Login
        </button>
      </div>
    </div>
  )
}
