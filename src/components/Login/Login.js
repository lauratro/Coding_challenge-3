import React from 'react'
import { useMutation, gql } from '@apollo/client'
import "./Login.css"


const CREATE_AUTH_MUTATION= gql`
mutation Auth($email:String!,$password:String!){
  Auth {
    login(input: { email:$email, password:$password}) {
      token
      userId
     
    }
 
  }
}
`

const Login=()=> {
  const getData=(data)=>{
    localStorage.setItem('token', data.Auth.login.token );
    localStorage.setItem('userId',data.Auth.login.userId);
    console.log(localStorage.getItem("token"))
  }
  const [createAuth, { data, loading, error }] = useMutation(CREATE_AUTH_MUTATION,{variables:{
email:"karl.kroeber@thekey.technology",password:"testtest"
  }})

  

  if(data)getData(data)

  return (
    <div>
      {loading && <p>Submitting....</p>}
      {error && <p>Submission error! ${error.message}</p> }
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
    </div>
  )
}
export default Login;