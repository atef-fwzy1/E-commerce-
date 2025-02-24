import { useEffect, useState } from "react";

export default function Alert(props){
    const [alert,setalert] = useState("")
    useEffect(()=>{
        setalert(props.ioOpen)
    },[props.ioOpen])
    return(
        <div className={`alert ${alert}`} style={{right:props.right}}>
            <h2 Class="err"> <div><i Class="fa-regular fa-hand"></i>{props.type}</div><i Class="fa-solid fa-xmark" onClick={()=>{
                    setalert("aletOff")
            }}></i> </h2>
        </div>
    )
}