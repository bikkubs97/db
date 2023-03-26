import React from "react"
import Grid from "./Grid"
import Header from "./Header"
import Sidebar from "./Sidebar"

import { useEffect } from "react"




export default function App() {


  useEffect(() => {
    fetch('http://localhost:3000/data')
      .then(response => response.json())
      .then(data => {
        localStorage.setItem('graphData', JSON.stringify(data))
      })
      .catch(error => {
        console.error(error)
      })
  }, [])

  return( 
    <>

    <Sidebar/>
    <Header/>
    <Grid/>
  
  </>)
}

