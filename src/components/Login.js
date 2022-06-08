import React,{useState} from 'react'
import { useMutation, gql } from '@apollo/client'

const CREATE_AUTH_MUTATION= gql`
mutation {
  Auth {
    login(input: { email: "string", password: "string" }) {
      token
      userId
     
    }
 
  }
}
`

export default function Login() {
  const[username,setUsername]=useState("karl.kroeber@thekey.technology")
  const[passwort,setPasswort]=useState("testtest")

  const [createAuth] = useMutation(CREATE_AUTH_MUTATION, {
    variables: {
     email: username,
      password: passwort
    }
  })
  return (
    <div>
        <form   onSubmit={(e) => {
        e.preventDefault();
        createAuth();
      }}>
<div>
  <label htmlFor='username'>Username</label>
  <input type="text" defaultValue={username}  />
</div>
<div>
  <label htmlFor='passwort'>Passwort</label>
  <input type="text" defaultValue={passwort}  />
</div>
<button type="submit">Log in</button>
        </form>
    </div>
  )
}
