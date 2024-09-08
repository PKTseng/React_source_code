import { Fragment } from 'react'
import './App.css'

function App() {
  const tags = ['React', 'Vue', 'JavaScript']

  return (
    <main className="container">
      <User />

      {tags.map((tag) => {
        return (
          <Fragment key={tag}>
            <p>{tag}</p>
            <hr />
          </Fragment>
        )
      })}
    </main>
  )
}

function User() {
  return (
    <>
      <p>User Name : ken</p>
      <p>Job Title : front end</p>
    </>
  )
}

export default App
