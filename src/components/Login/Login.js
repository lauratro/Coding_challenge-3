import React from 'react'
import { useMutation, gql } from '@apollo/client'
import "./Login.css"


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

console.log(data)

  return (
    <div>
        <form  className='formContainer'  onSubmit={(e) => {
        e.preventDefault();
        createAuth();
     
      }}>
<div className='inputField'>
  <label className='labelStyle' htmlFor='username'>Username</label>
  <input   type="text" defaultValue={"xxxxxxxx"}  />
</div>
<div className='inputField'>
  <label className='labelStyle' htmlFor='passwort'>Passwort</label>
  <input type="text" defaultValue={"xxxxxx"}  />
</div>
<div className='buttonCont'>
<button className='submitButton' type="submit">Log in</button>
</div>
        </form>
   
    </div>
  )
}
