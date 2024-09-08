import { Fragment } from 'react'
import './App.css'

function App() {
  const tags = ['React', 'Vue', 'JavaScript']

  return (
    <main className="container">
      <User />
    </main>
  )
}

function User() {
  return (
    <Fragment>
      <p>User Name : ken</p>
      <p>Job Title : front end</p>
    </Fragment>
  )
}

export default App
