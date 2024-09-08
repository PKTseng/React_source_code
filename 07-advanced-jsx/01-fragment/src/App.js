import { Fragment } from 'react'
import './App.css'

function App() {
  const tags = ['React', 'Vue', 'JavaScript']

  const Head = (
    <>
      <p>User Name : ken</p>
      <p>Job Title : front end</p>
    </>
  )

  const tagSection = tags.map((tag) => {
    return (
      <Fragment key={tag}>
        <p>{tag}</p>
        <hr />
      </Fragment>
    )
  })

  return (
    <main className="container">
      {Head}
      {tagSection}
    </main>
  )
}

// function User() {
//   return (
//     <>
//       <p>User Name : ken</p>
//       <p>Job Title : front end</p>
//     </>
//   )
// }

export default App
