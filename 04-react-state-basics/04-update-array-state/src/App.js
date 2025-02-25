import { useState } from 'react'
import './App.css'

function App() {
  const [list, setList] = useState([1, 2, 3, 4])

  const handleAdd = () => {
    setList([...list, list.length + 1])
  }

  const handleAddPlus = (index) => {
    const newList = [...list]
    newList[index] += 10

    setList(newList)
  }

  const handleDeleteItem = (item) => {
    setList([...list].filter((i) => i !== item))

    const newList = [...list]
    newList.splice(0, 1)
    setList(newList)
  }

  return (
    <div className="container">
      <ul>
        {list.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => handleAddPlus(index)}>+10</button>
            <button onClick={() => handleDeleteItem(item)}>Delete</button>
          </li>
        ))}
      </ul>
      <button onClick={handleAdd}>新增陣列</button>
    </div>
  )
}
export default App
