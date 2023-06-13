import { useState, useEffect } from 'react'
import axios from 'axios'

function App({ devData, greeting }) {
  console.log(devData)
  return (
    <div>
      <h1>{greeting} React Devs for Hire!</h1>
      <ul>
        {devData.map((dev) => {
          return (
            <div
              style={{
                height: '100px',
                backgroundColor: '#B1CF5F',
                margin: '10px',
                padding: '5px;',
                display: 'grid',
                placeContent: 'center',
                fontSize: '1.5rem',
              }}
            >
              {dev.name}
            </div>
          )
        })}
      </ul>
    </div>
  )
}

function Dev({ name, skills, available }) {
  // when a user clicks the button to show more info, more info shows on the page beneath the main info.
  // the button shows "show less" if the extra info is shown.
  // when a user click "show less", the extra info is hidden again.

  const [expanded, setExpanded] = useState(false)
  const [repos, setRepos] = useState([])
  const ghUsername = 'amygori'

  function handleClick() {
    console.log('CLICKKKK!!!')
    setExpanded(!expanded)
  }

  // useEffect runs AFTER every render of this component
  // when state changes in React, it triggers a re-render of the component
  // the empty array that is passed as the second argument to useEffect tells React to run this effect only once
  // without it, this useEffect would keep on running infinitely, because we're changing state inside it
  // useEffect(()=>{}, [])
  useEffect(() => {
    console.log('useEffect runs! 🐷', name)
    const URL = `https://api.github.com/users/${ghUsername}/repos?per_page=3`
    axios.get(URL).then((response) => setRepos(response.data))
  }, [])

  console.log('Returning JSX from Dev component 🥑', name)
  return (
    <li>
      <p>{name}</p>
      <button aria-expanded={expanded} onClick={handleClick}>
        {expanded ? 'Show Less' : 'Show More'}
      </button>
      {expanded && (
        <div>
          <p>{skills}</p>
          {available && <p>Available for hire!</p>}
          <div>
            <p>Here are Github repos! </p>
            <ul>
              {repos.map((repo) => (
                <li>
                  <a href="#">{repo.name}</a>
                </li>
              ))}
            </ul>
          </div>
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
