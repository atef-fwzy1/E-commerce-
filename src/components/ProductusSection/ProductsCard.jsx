import { NavLink } from "react-router-dom";
import AddToCard from "../Website/functions/AddToCard";
import { CardValue } from "../../context/numberCard";
import { useContext } from "react";

export default function ProductsCard({img={image:""},title,des,price,disc,rating,id,element}){
      const Cardnum = useContext(CardValue)

    return(
 <NavLink  to={`product/${id}`}> 
  <div class="card">
        <div class="img">
          <img src={`${img.image}`} alt="No Photos" />
        </div>
        <div class="text">
          <h3>{title.slice(0,15)}</h3>
          <p>{des.slice(0,55)}...</p>
         <div class="product-bottom-details" style={{paddingTop: "7px"}}>
				<div className="product-price"><small>{"$"+disc}</small>{"$"+price}</div>
				<div className="product-links">
					<a href="#"><i class="fa fa-heart"></i></a>
					<a href="#"><i class="fa fa-shopping-cart" onClick={()=>{AddToCard(element)  
             Cardnum.setNumber(prev => prev+1)}}></i></a>
				</div>
			</div>
        </div>
        <div className="starBox" refargoment={rating}>
                <i class="golden fas fa-star"></i>
        </div>
        </div>
  </NavLink>
    )
}