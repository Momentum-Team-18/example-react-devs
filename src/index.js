import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import devData from './dev-data.json'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App devData={devData} greeting= "hi"/>)
