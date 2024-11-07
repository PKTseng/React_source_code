import { useState } from 'react'
import './App.css'

function App() {
  return <Parent />
}

function Parent() {
  const [inputValue, setInputValue] = useState('')

  const handleInputChange = (e, args) => {
    setInputValue(e.target)
  }

  return <Child text="Hello, World!" onInputChange={handleInputChange} />
}

function Child(props) {
  // props.text = "Other Text";
  console.log(props)
  let { text } = props
  text = 'Other Text'

  return (
    <>
      <h1>{text}</h1>
      <input type="text" value={props.inputValue} onChange={(e) => props.onInputChange(e, args)} />
    </>
  )
}

export default App
