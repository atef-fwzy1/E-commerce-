

import { useParams } from "react-router-dom";
import Button from "../button/Button";
import"./detailseProgect.css"
import ImageGallery from "react-image-gallery";
import { useContext, useEffect, useState } from "react";
import Laoder from "../Website/Loader"
import PaymentForm from "../deposit/Deposit";
import axios from 'axios';
import AddToCard from '../Website/functions/AddToCard';
import { CardValue } from '../../context/numberCard';
import Counter from "../Counter/Counter";
export default function DetailsProject(){
    const[showDeposi,setShowDeposit] = useState(false)
const id = useParams();

const [detials,setDetails]=useState({description:"",discount:"",price:"",title:"",images:[]});


    // console.log(detials)
useEffect(()=>{
 const res = async()=>{
     await axios("https://e-commerce-backend-production-8649.up.railway.app/api/product/"+id.id).then((data)=>setDetails(data.data[0])).catch((err)=>console.log(err))
 }
 res()
},[])

const images = [];
 detials.images.map((ele,ind)=>{
    images.push({   original:ele.image,thumbnail:ele.image})
 })

    return(
        
        
        
        <div className="ProgectDetails" style={{display:showDeposi?"block":"flex"}}>
 
  {
    showDeposi?<PaymentForm/>:
    detials.description.length < 1 || detials.title.length < 1?<Laoder/>:<>
      <div className="left">
           <ImageGallery items={images} />
   </div>
              <div className="right">
                            <div class="container">
        <h1>{detials.title}</h1>
        <div className="rate">
<i class="golden fas fa-star"></i>
<i class="golden fas fa-star"></i>
<i class="golden fas fa-star"></i>
<i class="golden fas fa-star"></i>
<i class="golden fas fa-star"></i>
        </div>
        <p className="description">{detials.description}</p>
     
        <div className="price">{"$"+detials.price}<s style={{fontSize:"14px"}}>{"$"+(Number(+detials.price) + Number(detials.discount))}</s></div>
 
        <div class="cta-buttons">
            <div onClick={()=>setShowDeposit(true)}><Button value={"by Now"}/>  </div>
             <i class="fa fa-shopping-cart" onClick={()=>{
                 AddToCard(detials)
           
                }}></i>
               
    
        </div>
        
    </div>
        <p class="return-info"> Free returns within 30 days </p>
            </div>
    </>
  }
           
        </div>
    )
}