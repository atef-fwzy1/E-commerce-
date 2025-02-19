import Button from 'react-bootstrap/Button';
import"./oneProduct.css"
import { useEffect, useState } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';
export default function OneProduct(){
     const[latest,setlatest]=useState({title:"",description:"",id:"",images:[{image:""}]})

    useEffect(()=>{
      axios.get("http://127.0.0.1:8000/api/latest-sale").then((data)=>{
     setlatest(data.data[Math.floor(Math.random() * data.data.length) + 0])})

     },[])
    return(
        <div className="Oneproduct">
              <div className="left">
                   <h2>{latest.title}</h2>
                   <span>{latest.description}</span>
                     <NavLink to={`product/${latest.id}`}> <Button className='Shop_Now'  variant="secondary">Shop Now</Button></NavLink>
              </div>
              <img src={`${latest.images[0].image}`} alt="errr"/>
        </div>
    )
}