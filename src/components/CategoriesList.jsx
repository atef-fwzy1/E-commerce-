import { useContext, useEffect, useState } from "react"
import { Axios } from "./Axios"
 import "./CategoriesList.css"
import { Menu } from "../context/MenuContext";
import Placeholder from 'react-bootstrap/Placeholder';
export default function CategoriesList(){
     const [categories,setcategories]  =useState([]);
     const menu = useContext(Menu);
      
     useEffect(()=>{
      Axios.get("/categories").then((data)=>setcategories(data.data))
    },[])
    let sliceList = [];
    var count = 0;
    let list =[];
     categories.map((ele,ind)=>{
              count++;
              list.push(<li key={ind}>{ele.title.slice(0,8)}</li>) 
              if(count === 10 || categories.length === ind){

                  sliceList.push(<ul>{list}</ul>)
                  list = [];
                  count = 0;
                }
        
    })

    return(
        <div className="CategoOuline">
            
        <div className="CategoList">
            <i class="closeList fa-solid fa-xmark" onClick={()=>menu.setIsopen(false)}></i>
            {sliceList.length == 0 ? <>
      <Placeholder as="p" animation="glow"  style={{width:"100%"}}>
        <Placeholder xs={12} />
      </Placeholder>
      <Placeholder as="p" animation="wave" style={{width:"100%"}}>
        <Placeholder xs={12} />
      </Placeholder>
    </>:sliceList}
          
        </div>

        </div>
    )
}