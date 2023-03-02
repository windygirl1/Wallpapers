import React from "react";
import './Start.css'
import wallpaper from './../components/wallpaper.png'

const Start = () => {
   return(
    <div className="Start">
      <img src={wallpaper} style={{width: '200px', height: '200px', marginTop: '200px'}}></img>     
    </div>
   ) 
}

export default Start