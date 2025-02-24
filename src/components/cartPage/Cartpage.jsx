import { NavLink } from "react-bootstrap"
import"./CartPage.scss"
import"../Counter/Counter"
import { useContext, useEffect, useRef, useState } from "react"
import DeleteFromCard from "../Website/functions/DeleteFromCard"
import { CARD } from "../../context/CardContext"
import { CardValue } from "../../context/numberCard"

export default function CartPage() {
    const totalPrice=useRef()
    let counterEle=useRef([])

    const card = useContext(CARD)
     const Cardnum = useContext(CardValue)

 const[featch,setFeatch] =useState(false);
   const[cart,setCart] = useState([{About: "Bed.",category: "5",created_at: "2025Z",description: "Bedbei Cen.",
discount: "20",
id: "107",images: [{iamge:"l"},{iamge:"l"}],
price: "190",rating: "5",ratings_number: "0",
title: "Danke sagen!",
updated_at: "2025-0000Z"}])

  useEffect(()=>{
    setCart(JSON.parse(localStorage.getItem("products")))
    setFeatch(true);
   
  },[card.cart])


  let count = 0;
    let ShowCards =[];
   if(featch){

cart?.map((ele,ind)=>{
       count += (+ele.price * ele.count);
       if(cart.length === ind + 1){
         totalPrice.current.textContent = "$"+count
        }
        ShowCards.push(<div Class="cart">
    <ul Class="cartWrap">
      <li Class="items odd">
        
    <div Class="infoWrap"> 
        <div Class="cartSection">
        <img src="http://lorempixel.com/output/technics-q-c-300-300-4.jpg" alt="" Class="itemImg" />
          <p Class="itemNumber">#-{ele.id}</p>
          <h3>{ele.title}</h3>
        
           <p> <input type="text"  Class="qty" /> <img style={{height:"70px"}} src={`https://e-commerce-backend-production-8649.up.railway.app${ele.images[0].image}`} alt="err" /></p>
        
          <p Class="stockStatus"> In Stock</p>
        </div>  
        <div Class="prodTotal cartSection">
                <div style={{display:"flex",alignItems:"center",justifyContent:"center",gap:"15px"}}>
                   <p>{"$"+ele.price}</p>
                  <i Class="fa-solid fa-trash" onClick={()=>{DeleteFromCard(ele.id) 
                           card.setCard((prive)=>prive   + 1 )
                           Cardnum.setNumber((prive)=>prive - 1 )
                      
                  }}></i>
                </div>
                <div Class="counter">
                        <div Class="boxCounter">
                     <span Class="one" onClick={()=>{counterEle.current[ind].textContent++
                        const num = totalPrice.current.textContent.slice(1)
                           console.log("$"+(+num + +ele.price))
                          totalPrice.current.textContent = "$"+(+num + +ele.price)

                     }}>+</span>
                         <span Class="two"  ref={(ele)=>{
                          counterEle.current[ind] = ele}}> {ele.count}</span>
                     <span Class="three" onClick={()=> {
                      if(counterEle.current[ind].textContent > 1){
                        counterEle.current[ind].textContent--
                        let num = totalPrice.current.textContent.slice(1)
                          totalPrice.current.textContent = "$"+(num - ele.price)
                      }
                    }}
                      >-</span>
                        </div>
                </div>
        </div>
      </div>
      </li>
    </ul>
  </div>)
  })

}
  return(
    <div Class="CartBox">
 <div Class="wrap cf">
  <div Class="heading cf">
    <h1>My Cart</h1>
        <NavLink to={"/"} href="/" Class="continue">Continue Shopping</NavLink>
  </div>
  
    {ShowCards}
  <div Class="promoCode"><label for="promo">Have A Promo Code?</label><input type="text" name="promo" placholder="Enter Code" />
  <a href="#" Class="btn">Submite</a></div>
  
  <div Class="subtotal cf">
    <ul>

            <li Class="totalRow final"><span Class="label">Total</span><span ref={totalPrice} Class="value">0</span></li>
      <li Class="totalRow"><a href="#" Class="btn continue">Checkout</a></li>
    </ul>
  </div>
</div>
    </div>
  )
 
}