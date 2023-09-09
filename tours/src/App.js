import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tours-project'
function App() {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);

  function removeTour(id) {
    const newTours = tours.filter((ele) => id !== ele.id)
    setTours(newTours)
  }
  useEffect(() => {
    console.log('refresh')
    fetch(url).then(
      res => res.json()
    ).then(
      s => {
        setTours(s)
        setLoading(false)
      }
    ).catch(err => console.log("error"))
  }, [])

  const reloadPage = () => window.location.reload();
  return (
    <>
      {tours.length === 0 ? (
        <center>
          <h2>No Tours Left</h2>
          <button className="refreshBtn" onClick={reloadPage}>Refresh</button>
        </center>) : (
        loading ? <Loading /> :
          <>
            <h2>Our Tours</h2>
            <Tours data={tours} removeTour={removeTour} />
          </>)

      }

    </>
  )
}

export default App
