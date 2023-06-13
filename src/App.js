import { useState } from 'react'
import DevList from './components/DevList'
import Dev from './components/Dev'

function App({ devData, greeting }) {
  const [selectedDev, setSelectedDev] = useState('')

  return (
    <div>
      <h1>{greeting} React Devs for Hire!</h1>
      {/* if I have a selectedDev, show ONE dev // else, show the list */}
      {selectedDev ? (
        <Dev dev={selectedDev} resetDev={setSelectedDev} />
      ) : (
        <DevList devData={devData} selectDev={setSelectedDev} />
      )}
    </div>
  )
}

export default App

// important things in React:
// JSX
// components
// props
// state
