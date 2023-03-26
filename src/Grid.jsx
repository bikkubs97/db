import React from "react";
import Country from "./Country";
import Intesnsity from "./Intesnsity";
import Like from "./Like";
import Year from "./Year";
import Region from "./Region"
import Topics from "./Topics";


export default function Grid() {
  return <div className="grid">
   
   <div className="first">
   <Country/>
   <Intesnsity/>  
   </div>
    <Year/>
    
    
   
    <Like/>
    <Region/>
  
    <Topics/>
      
 
  
  
  </div>;
}
