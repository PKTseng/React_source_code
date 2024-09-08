import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [dateTime, setDateTime] = useState(new Date())

  // useEffect(() => {
  //   const id = setInterval(() => {
  //     setDateTime(new Date())
  //   }, 1000)

  //   console.log(id)
  // }, [])

  const [refresh, setRefresh] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setDateTime(new Date())
    }, 1000)

    console.log(id)

    return () => {
      clearInterval(id)
      console.log('清除 Id =' + id + '的 interval')
    }
  }, [refresh])

  return (
    <main className="container">
      <h1>{dateTime.toLocaleString('zh-CN')}</h1>
      <button onClick={() => setRefresh(refresh + 1)}>add</button>
    </main>
  )
}

export default App
