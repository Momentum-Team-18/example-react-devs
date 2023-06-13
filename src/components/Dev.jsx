import { useEffect, useState } from 'react'
import axios from 'axios'

const Dev = ({ dev, resetDev }) => {
  // when a user clicks the button to show more info, more info shows on the page beneath the main info.
  // the button shows "show less" if the extra info is shown.
  // when a user click "show less", the extra info is hidden again.

  const [repos, setRepos] = useState([])

  const handleGoBack = () => {
    // how do I let React know that it should show the dev list instead of this component?
    // I need to call the state setter function to update the value of selectedDev back to empty string
    resetDev('')
  }

  // useEffect runs AFTER every render of this component
  // when state changes in React, it triggers a re-render of the component
  // the empty array that is passed as the second argument to useEffect tells React to run this effect only once
  // without it, this useEffect would keep on running infinitely, because we're changing state inside it
  // useEffect(()=>{}, [])
  console.log('the dev component renders. The value of dev is: ', dev)
  console.log('the dev component renders. The value of repos is: ', repos)
  useEffect(() => {
    console.log('Use Effect runs. the value of dev is: ', dev)
    const URL = `https://api.github.com/users/${dev}/repos?per_page=3`
    axios.get(URL).then((response) => setRepos(response.data))
  }, [])

  return (
    <div>
      <button onClick={handleGoBack}>Go Back to All Devs</button>
      <p>{dev}</p>
    </div>
  )
}

export default Dev
