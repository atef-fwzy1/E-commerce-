import { useEffect, useState } from "react"
import "./menu.css"
import axios from "axios"
import { NavLink } from "react-router-dom"
export default function Menuu({openMenu}){
    const [open,setopen] = useState(true)
  useEffect(()=>{
        setopen(openMenu);
  },[openMenu])
    const [categories,setcategories] = useState([])
    useEffect(()=>{
    axios.get("https://e-commerce-backend-production-c659.up.railway.app/api/categories").then((data)=>{
        setcategories(data.data.reverse())})
        
    },[])

const links = categories.map((ele)=>{
     if(ele.title.length > 10 )
         return <li onClick={()=>setopen(false)}><NavLink to={`/ctegoriesDet/${ele.id}`}>{ele.title.slice(0,Math.floor(Math.random() * 12) + 10)}...</NavLink></li>

      if(ele.title.length < 2)
       <></>
       return <li onClick={()=>setopen(false)}><NavLink to={`/ctegoriesDet/${ele.id}`}>{ele.title}</NavLink></li>
      
  })
    

    let  showSomeCategories =[]
categories.map((ele,ind)=>{
        if(ind < 10 ){
            if(ele.title.length > 15)
                showSomeCategories.push(<li key={ind}>{ele.title.slice(0,8)}...</li>)
        }
        return(
             <li key={ind}>{ele.title}</li>
        )
    })
       return <div class={`nav-menu ${open && openMenu?"open":""}`}>
                <i Class=" closemenu fa-solid fa-circle-xmark" onClick={()=>setopen(false)}></i>
             <ul Class="linkesCyegoried">
              {links}
             </ul>
                        
   </div>
}