import React,{useState} from 'react'

export default function Login() {
  const[username,setUsername]=useState("karl.kroeber@thekey.technology")
  const[passwort,setPasswort]=useState("testtest")
  return (
    <div>
        <form>
<div>
  <label htmlFor='username'>Username</label>
  <input type="text" value={username}  />
</div>
<div>
  <label htmlFor='passwort'>Passwort</label>
  <input type="text" value={passwort}  />
</div>
<button type="submit">Log in</button>
        </form>
    </div>
  )
}
