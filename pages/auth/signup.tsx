export default function SignUp() {
  return <>sign up</>
}

// import { useMutation, gql } from '@apollo/client'
// import { useState } from 'react'
// import { LoadOverlay } from '../components/LoadOverlay'

// import styles from '../styles/Home.module.css'

// const CREATE_USER = gql`
//   mutation CreateUser($email: String!, $password: String!) {
//     createUser(email: $email, password: $password) {
//       id
//       email
//     }
//   }
// `

// export default function Home() {
//   const [createUser, { data, error, loading }] = useMutation(CREATE_USER)
//   const [email, setEmail] = useState('')
//   const [password, setPassword] = useState('')

//   const handleSubmit = async () => {
//     await createUser({
//       variables: {
//         email,
//         password,
//       },
//     })
//   }
//   return (
//     <>
//       <div className={styles.main}>
//         {loading && <LoadOverlay />}
//         <div
//           style={{
//             display: 'flex',
//             flexDirection: 'column',
//             alignItems: 'center',
//             justifyContent: 'center',
//             margin: 50,
//             gap: 20,
//           }}
//         >
//           <input value={email} onChange={(e) => setEmail(e.target.value)} />
//           <input
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//           <button
//             style={{
//               padding: 10,
//             }}
//             onClick={handleSubmit}
//           >
//             sign up
//           </button>
//         </div>
//         {error && <p>{error.message}</p>}
//         <pre>{JSON.stringify(data)}</pre>
//       </div>
//     </>
//   )
// }
