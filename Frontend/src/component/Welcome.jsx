import React from 'react'
import { useSelector } from 'react-redux'

const Welcome = () => {
  const {user} = useSelector((state) => state.auth)
  return (
    <div>
      <h1 className='title'>Dashboard</h1>
      <h1 className='subtitle'>
        Hello Welcome Back... <strong>{user && user.name}</strong></h1>
    </div>
  )
}

export default Welcome