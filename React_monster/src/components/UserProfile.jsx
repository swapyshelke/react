import React from 'react'
import { useContext } from 'react'
import { UserContext } from './UserProvider'

const UserProfile = () => {

    const {user } = useContext(UserContext)
  return (
    <div>
        <h1>user profile</h1>
        <p>Name: {user.name}</p>
    </div>
  )
}

export default UserProfile