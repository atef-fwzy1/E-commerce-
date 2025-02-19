import AddToCard from "../Website/functions/AddToCard"
import "./counter.css"
import DeleteFromCard from "../Website/functions/DeleteFromCard"
import { useEffect, useState } from "react"
export default function Counter({ele}){
  
    return(
           <div className="boxCounter">
                     <span className="one" onClick={AddToCard(ele)}>+</span>
                         <span className="two" >5</span>
                     <span className="three" 
                      onClick={DeleteFromCard(ele)}>-</span>
                        </div>
    )
}