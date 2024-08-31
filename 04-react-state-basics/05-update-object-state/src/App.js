import { useState } from 'react'
import './App.css'

function App() {
  const [person, setPerson] = useState({
    name: 'ken',
    age: 25,
  })

  const deleteAge = () => {
    const { age, ...newPerson } = person
    setPerson(newPerson)
  }

  return (
    <div className="container">
      <ul>
        {Object.keys(person).map((key, index) => (
          <li key={index}>
            {key}: {person[key]}
          </li>
        ))}
      </ul>
      <button onClick={deleteAge}>Delete Age</button>
    </div>
  )
}
export default App
