import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserProfile from './components/UserProfile'
import { UserProvider } from './components/UserProvider'

function App() {
  const [count, setCount] = useState(0)

  return (
   
   <UserProvider>
      <UserProfile />
   </UserProvider>
  )
}

export default App
