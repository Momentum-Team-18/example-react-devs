import { useState } from 'react'
import './App.css'


function App({ devData, greeting }) {
  console.log(devData)
  return (
    <div>
      <h1>{greeting} React Devs for Hire!</h1>
      <ul>
        {devData.map((dev) => {
          return <Dev name={dev.name} skills={dev.expertise} />
        })}
      </ul>
    </div>
  )
}

function Dev(props) {
  const [expanded, setExpanded] = useState(false)

  return (
    <li>
    <p>{props.name}</p>
    <button onClick={() => setExpanded(!expanded)}> { expanded ? "Show Less" : "Show More"}</button>
    {expanded && (
      <div>
        <p>{props.skills}</p>
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
