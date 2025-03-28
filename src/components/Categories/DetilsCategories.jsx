import { useEffect, useState } from "react"
import { Axios } from "../Axios"
import NewCard from "../Toprated/NewCard"
import { NavLink, useParams } from "react-router-dom"
import Button from "../button/Button"

export default function DetilsCategories(){
    const [products,setProducts] = useState([])

    const [Id,SetId] =useState( useParams().id)


    useEffect(()=>{
      SetId(window.location.pathname.slice(-2))
    },[window.location.pathname.slice(-2)])

     useEffect(()=>{
       Axios.get("/products").then((data)=>setProducts(data.data.reverse())).catch((err)=>console.log(err))
    },[]) 
     
 let showlatest=[]
      products.map((ele,ind)=>{
   
          if(ele.category  === +Id.slice(1))
               showlatest.push(<NewCard  element={ele}  img={ele.images[0]}title={ele.title}des={ele.description}price={ele.price}disc={ele.discount}rating={ele.rating}  id={ele.id} />)
        })
    return(
       <>
       <div Class="detilsetexe">
            <h3 Class="count">We found   {` #${showlatest.length}`} Products </h3>
       </div>
       <div Class="ratedCont" style={{width:"90%",margin:"auto"}}>

        {showlatest}
       </div>  
       <NavLink to={'/'}  style={{margin:"auto",width:"fit-content", height:"fit-content", display: "block"}}>
             <Button value={"Go to Home "}/>
       </NavLink>
        </>
    ) 
}