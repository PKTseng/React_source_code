import { useState } from 'react'
import './App.css'

function App() {
  const [person, setPerson] = useState({
    name: 'Alice',
    age: 30,
    address: {
      city: 'New York',
      country: 'USA',
      postalCode: '10001',
    },
    hobbies: ['reading', 'swimming'],
  })

  const deleteAge = () => {
    const {
      address: { postalCode, ...addressRest },
      ...personRest
    } = person
    const newPerson = { ...personRest, address: addressRest }

    console.log(newPerson)

    //   {
    //     "name": "Alice",
    //     "age": 30,
    //     "hobbies": [
    //         "reading",
    //         "swimming"
    //     ],
    //     "address": {
    //         "city": "New York",
    //         "country": "USA"
    //     }
    // }
  }

  return (
    <div className="container">
      {/* <ul>
        {Object.keys(person).map((key, index) => (
          <li key={index}>
            {key}: {person[key]}
          </li>
        ))}
      </ul> */}
      <button onClick={deleteAge}>Delete Age</button>
    </div>
  )
}
export default App
