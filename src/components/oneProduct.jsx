import Button from 'react-bootstrap/Button';
import"./oneProduct.css"
import { useEffect, useState } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';
export default function OneProduct(){
     const[latest,setlatest]=useState({title:"",description:"",id:"",images:[{image:""}]})
     const[images,setImages] = useState("")

    useEffect(()=>{
      axios.get("https://e-commerce-backend-production-8649.up.railway.app/api/latest-sale").then((data)=>{
    setlatest(data.data[Math.floor(Math.random() * data.data.length) + 0])
   setImages((data.data[Math.floor(Math.random() * data.data.length) + 0]).images[0].image)
  }).catch((err)=>console.log(err))
   
  },[])

    return(
        <div Class="Oneproduct">
              <div Class="left">
                   <h2>{latest.title}</h2>
                   <span>{latest.description}</span>
                     <NavLink to={`product/${latest.id}`}> <Button className='Shop_Now'  variant="secondary">Shop Now</Button></NavLink>
              </div>
              <img src={`https://e-commerce-backend-production-8649.up.railway.app${images}`} alt="errr"/>
        </div>
    )
}