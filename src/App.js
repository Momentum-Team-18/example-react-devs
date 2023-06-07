import { useState } from 'react'
import './App.css'
// import bookData from './book-data.json'

function App() {
  const devs = ['Anna', 'Teddy', 'Meagan', 'Alex']

  return (
    <div>
      <h1>React Devs for Hire!</h1>
      <ul>
        {devs.map((dev) => {
          return <Dev name={dev} />
        })}
      </ul>
    </div>
  )
}

function Dev(props) {
  const [expanded, setExpanded] = useState(false)
  // { name: "whatevername"}
  return (
    <li>
    <p>{props.name}</p>
    <button onClick={() => setExpanded(!expanded)}> { expanded ? "Show Less" : "Show More"}</button>
    {expanded && (
      <div>
        <p>Expertise: JS, React</p>
      </div>
    )}
  </li>
  )
}

export default App

// important things in React:
// JSX
// components
// props
// state
