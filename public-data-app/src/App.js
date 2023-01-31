import React, {useState, useEffect} from 'react'

function fetchData() {
  const promise = fetch("요청할 주소")
    .then(res => {
      if(!res.ok) {
        throw res;
      }
      return res.json()
    })
    return promise
}

export default function App() {
  const [error, setError] = useState(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const [data, setData] = useState(null)

  console.log(data)
  
  useEffect(() => {
    fetchData()
      .then(data => {
        setData(data)
      })
      .catch(error => {
        setError(error)
      })
      .finally(() => setIsLoaded(true))
  }, [])

  if(error) {
    return <p>failed to fetch</p>
  }

  if(!isLoaded) {
    return <p>fetching data...</p>
  }
  return <h1>호로로로로로로로로로로로</h1>
}
