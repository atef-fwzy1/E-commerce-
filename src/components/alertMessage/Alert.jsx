import React, { useContext, useState } from 'react'

import"./alert.css"
import {Alert} from '../../context/AlerHandet'

const AlertDev = () => {
 const alertHandeler = useContext(Alert)

if(alertHandeler.iSOpen.state === false && alertHandeler.iSOpen.text !== "frist")
setTimeout(()=>{
alertHandeler.setIsopen({...alertHandeler.iSOpen,state:true})
},4000)

return (
   <div className={`alert ${alertHandeler.iSOpen.state?"made":"closed"}`} style={{backgroundColor:alertHandeler.iSOpen.type !== "good"&&"rgba(163, 12, 12, 0.85)"}}>
    <strong >{alertHandeler.iSOpen.type==="good"?"success":"Field"}!</strong> {alertHandeler.iSOpen.text}

  </div>
  )
}

export default AlertDev