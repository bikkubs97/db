import React, { useState, useEffect } from "react"
import Grid from "./Grid"
import Header from "./Header"
import Sidebar from "./Sidebar"

export default function App() {
  const [graphData, setGraphData] = useState(null)

  useEffect(() => {
    fetch('https://dashboard-server-tpqg.onrender.com/data')
      .then(response => response.json())
      .then(data => {
        setGraphData(data)
      })
      .catch(error => {
        console.error(error)
      })
  }, [])

  return( 
    <>
      <Sidebar />
      <Header />
      {graphData && <Grid data={graphData} />}
    </>
  )
}
