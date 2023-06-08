import { useState } from 'react'
import './App.css'


function App({ devData, greeting }) {
  console.log(devData)
  return (
    <div>
      <h1>{greeting} React Devs for Hire!</h1>
      <ul>
        {devData.map((dev) => {
          return <Dev name={dev.name} skills={dev.expertise} available={dev.available}/>
        })}
      </ul>
    </div>
  )
}

function Dev(props) {
  // when a user clicks the button to show more info, more info shows on the page beneath the main info. 
  // the button shows "show less" if the extra info is shown.
  // when a user click "show less", the extra info is hidden again.
  
  const [expanded, setExpanded] = useState(false)
  
  function handleClick(){
    console.log("CLICKKKK!!!")
    setExpanded(!expanded)
  }
  return (
    <li>
    <p>{props.name}</p>
    <button aria-expanded={expanded} onClick={handleClick}> { expanded ? "Show Less" : "Show More" }</button>
    {expanded && (
      <div>
        <p>{props.skills}</p>
        { props.available && <p>Available for hire!</p> }
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
