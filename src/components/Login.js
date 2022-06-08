import React from 'react'

export default function Login() {
  return (
    <div>
        <form>
<div>
  <label htmlFor='username'>Username</label>
  <input type="text"  />
</div>
<div>
  <label htmlFor='passwort'>Passwort</label>
  <input type="text"  />
</div>
<button type="submit">Log in</button>
        </form>
    </div>
  )
}
