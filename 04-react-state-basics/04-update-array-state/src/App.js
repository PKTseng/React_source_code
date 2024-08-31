import { useState } from 'react'
import './App.css'

function App() {
  const [list, setList] = useState([1, 2, 3, 4])

  const handleAdd = () => {
    setList([...list, list.length + 1])
  }

  return (
    <div className="container">
      <ul>
        {list.map((item, index) => (
          <li key={index}>
            {item} <button>+10</button>{' '}
          </li>
        ))}
      </ul>
      <button onClick={handleAdd}>新增陣列</button>
    </div>
  )
}
export default App
