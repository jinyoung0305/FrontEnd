import React, {useState, useEffect} from 'react'

function fetchData() {
  const promise = fetch("https://apis.data.go.kr/B552061/frequentzoneBicycle/getRestFrequentzoneBicycle?serviceKey=O9LgAKxzZj3cJj949bIMCERmM1tsOGq4BbZ%2BR%2BdleIHB%2BiSsEdmADXsEwKPfB7zNBIDusKvcFUw6%2Fjlx77kHJg%3D%3D&searchYearCd=2021&siDo=11&guGun=110&type=json&numOfRows=10&pageNo=1")
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
