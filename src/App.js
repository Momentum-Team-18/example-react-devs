import './App.css'
// import bookData from './book-data.json'
import Dev from './Dev'

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

export default App

// important things in React:
// JSX
// components
// props
// state
