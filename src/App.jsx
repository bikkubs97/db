import React, { useState, useEffect } from "react";
import Grid from "./Grid";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Loading from "./Loading";

export const graphContext = React.createContext()

export default function App() {
  const [graphData, setGraphData] = useState([]);



  useEffect(() => {
    fetch("https://dashboard-server-lv2i.onrender.com/data")
      .then((response) => response.json())
      .then((data) => {
        setGraphData(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);


  return (
    <>
    <graphContext.Provider value={graphData}>
      <Sidebar />
     
      {graphData.length === 0 ? (
          <Loading />
        ) : (
          <>
          <Header />
          <Grid />
          </>
        )}
      </graphContext.Provider>
    </>
  );
}
