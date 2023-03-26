import React from "react"
import Grid from "./Grid"
import Header from "./Header"
import Sidebar from "./Sidebar"




export default function App() {



    fetch('https://dashboard-server-tpqg.onrender.com/data')
      .then(response => response.json())
      .then(data => {
        localStorage.setItem('graphData', JSON.stringify(data))
      })
      .catch(error => {
        console.error(error)
      })


  return( 
    <>

    <Sidebar/>
    <Header/>
    <Grid/>
  
  </>)
}

