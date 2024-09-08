import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [user, setUser] = useState()

  useEffect(() => {
    setTimeout(() => {
      setUser({
        name: 'ken',
        occupation: 'F2E',
      })
    }, 3000)
  }, [])

  if (!user) {
    return <div className="loading">loading...</div>
  }

  return (
    <main className="container">
      <p>User Name：{user.name}</p>
      <p>JOB：{user.occupation}</p>
    </main>
  )

  // return user ? (
  //   <main className="container">
  //     <p>User Name：{user.name}</p>
  //     <p>JOB：{user.occupation}</p>
  //   </main>
  // ) : (
  //   <div className="loading">loading...</div>
  // )
}

export default App
