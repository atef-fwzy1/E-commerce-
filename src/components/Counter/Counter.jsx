import AddToCard from "../Website/functions/AddToCard"
import "./counter.css"
import DeleteFromCard from "../Website/functions/DeleteFromCard"
import { useEffect, useState } from "react"
export default function Counter({ele}){
  
    return(
           <div Class="boxCounter">
                     <span Class="one" onClick={AddToCard(ele)}>+</span>
                         <span Class="two" >5</span>
                     <span Class="three" 
                      onClick={DeleteFromCard(ele)}>-</span>
                        </div>
    )
}