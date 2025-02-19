import { useContext, useEffect } from "react"
import"./newCard.css"
import { Axios } from "../Axios"
import { NavLink } from "react-router-dom"
import AddToCard from "../Website/functions/AddToCard"
import { CardValue } from "../../context/numberCard"
export default function NewCard({img={image:""},title,des,price,disc,rating,hader,id,element = {About: "Bed.",category: "5",created_at: "2025Z",description: "Bedbei Cen.",
discount: "20",
id: "107",images: [{iamge:"l"},{iamge:"l"}],
price: "190",rating: "5",ratings_number: "0",
title: "Danke sagen!",
updated_at: "2025-0000Z"}}){
    const Cardnum = useContext(CardValue)

    return(
        <>
                  
                   
               <NavLink to={`/product/${id}`}>
				    	<div class="product-card">
						<div class="badge">Hot</div>
		<div className="product-tumb">
			<img src={`${img.image}`} alt=""/>
		</div>
		<div class="product-details">
			<h4><a href="#">{title}</a></h4>
            {
                       des.length > 50 ? <p>{des.slice(0,50)}</p>:<p>{des}</p>         
            }
			<div class="product-bottom-details">
				<div className="product-price"><small>{"$"+disc}</small>{"$"+price}</div>
				<div className="product-links">
					<a href="#"><i class="fa fa-heart"></i></a>
					<a href="#"><i class="fa fa-shopping-cart" onClick={()=>{AddToCard(element)  
						 Cardnum.setNumber(prev => prev +1)}}></i></a>
				</div>
			</div>
		</div>
	</div>
			   </NavLink>
     
        </>
    )
}