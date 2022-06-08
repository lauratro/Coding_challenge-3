import React,{useState} from 'react'
import { useMutation, gql } from '@apollo/client'

const CREATE_AUTH_MUTATION= gql`
mutation Auth{
  Auth {
    login(input: { email: "karl.kroeber@thekey.technology", password:"testtest" }) {
      token
      userId
     
    }
 
  }
}
`


export default function Login() {
  const[username,setUsername]=useState("karl.kroeber@thekey.technology")
  const[passwort,setPasswort]=useState("testtest")
  





  const [createAuth, { data, loading, error }] = useMutation(CREATE_AUTH_MUTATION, {
    onCompleted({Auth}) {
      if (Auth) {
        console.log(Auth.login.token)
        localStorage.setItem('token', Auth.login.token );
        localStorage.setItem('userId',Auth.login.userId);
      
      }
    }
  })
  if (loading) return 'Submitting...';
  if (error) return `Submission error! ${error.message}`;



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
