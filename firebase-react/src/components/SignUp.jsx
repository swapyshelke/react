import React, { useState } from 'react'

const SignUp = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

  return (
    <div>
        <input type="email" onChange={(e) => setEmail(e.target.value)} value={email} placeholder='enter email' />
        <input type="password" onChange={(e) => setPassword(e.target.value)} value={password} placeholder='enter password' />
    </div>
  )
}

export default SignUp