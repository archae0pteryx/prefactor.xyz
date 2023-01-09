import { gql } from "@apollo/client"

export const USER_QUERY = gql`
  query UserQuery($id: String!) {
    findUser(id: $id) {
      name
      role
      bio
      blog
      avatar_url
      login
      image
      id
      gravatar_id
      emailVerified
      email
      createdAt
      company
      twitter_username
      createdAt
      updatedAt
    }
  }
`
