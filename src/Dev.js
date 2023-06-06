import { useState } from 'react'

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
export default Dev
