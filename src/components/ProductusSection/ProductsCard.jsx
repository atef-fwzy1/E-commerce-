import { NavLink } from "react-router-dom";
import AddToCard from "../Website/functions/AddToCard";
import { CardValue } from "../../context/numberCard";
import { useContext } from "react";

export default function ProductsCard({img={image:""},title,des,price,disc,rating,id,element}){
      const Cardnum = useContext(CardValue)


    return(
 <NavLink  to={`product/${id}`}> 
  <div Class="card">
        <div Class="img">
          <img src={`https://e-commerce-backend-production-8649.up.railway.app/${img.image}`} alt="No Photos" />
        </div>
        <div Class="text">
          <h3>{title.slice(0,15)}</h3>
          <p>{des.slice(0,55)}...</p>
         <div Class="product-bottom-details" style={{paddingTop: "7px"}}>
				<div Class="product-price"><small>{"$"+disc}</small>{"$"+price}</div>
				<div Class="product-links">
					<a href="#"><i Class="fa fa-heart"></i></a>
					<a href="#"><i Class="fa fa-shopping-cart" onClick={()=>{AddToCard(element)  
             Cardnum.setNumber(prev => prev+1)}}></i></a>
				</div>
			</div>
        </div>
        <div Class="starBox" refargoment={rating}>
                <i Class="golden fas fa-star"></i>
        </div>
        </div>
  </NavLink>
    )
}