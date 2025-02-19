import { useEffect, useState } from "react";

export default function Alert(props){
    const [alert,setalert] = useState("")
    useEffect(()=>{
        setalert(props.ioOpen)
    },[props.ioOpen])
    return(
        <div className={`alert ${alert}`} style={{right:props.right}}>
            <h2 className="err"> <div><i class="fa-regular fa-hand"></i>{props.type}</div><i class="fa-solid fa-xmark" onClick={()=>{
                    setalert("aletOff")
            }}></i> </h2>
        </div>
    )
}