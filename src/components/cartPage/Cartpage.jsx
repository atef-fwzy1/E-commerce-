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
        ShowCards.push(<div class="cart">
    <ul class="cartWrap">
      <li class="items odd">
        
    <div class="infoWrap"> 
        <div class="cartSection">
        <img src="http://lorempixel.com/output/technics-q-c-300-300-4.jpg" alt="" class="itemImg" />
          <p class="itemNumber">#-{ele.id}</p>
          <h3>{ele.title}</h3>
        
           <p> <input type="text"  class="qty" /> <img style={{height:"70px"}} src={`${ele.images[0].image}`} alt="err" /></p>
        
          <p class="stockStatus"> In Stock</p>
        </div>  
        <div class="prodTotal cartSection">
                <div style={{display:"flex",alignItems:"center",justifyContent:"center",gap:"15px"}}>
                   <p>{"$"+ele.price}</p>
                  <i class="fa-solid fa-trash" onClick={()=>{DeleteFromCard(ele.id) 
                           card.setCard((prive)=>prive   + 1 )
                           Cardnum.setNumber((prive)=>prive - 1 )
                      
                  }}></i>
                </div>
                <div className="counter">
                        <div className="boxCounter">
                     <span className="one" onClick={()=>{counterEle.current[ind].textContent++
                        const num = totalPrice.current.textContent.slice(1)
                           console.log("$"+(+num + +ele.price))
                          totalPrice.current.textContent = "$"+(+num + +ele.price)

                     }}>+</span>
                         <span className="two"  ref={(ele)=>{
                          counterEle.current[ind] = ele}}> {ele.count}</span>
                     <span className="three" onClick={()=> {
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
    <div className="CartBox">
 <div class="wrap cf">
  <div class="heading cf">
    <h1>My Cart</h1>
        <NavLink to={"/"} href="/" className="continue">Continue Shopping</NavLink>
  </div>
  
    {ShowCards}
  <div class="promoCode"><label for="promo">Have A Promo Code?</label><input type="text" name="promo" placholder="Enter Code" />
  <a href="#" class="btn">Submite</a></div>
  
  <div class="subtotal cf">
    <ul>

            <li class="totalRow final"><span class="label">Total</span><span ref={totalPrice} className="value">0</span></li>
      <li class="totalRow"><a href="#" class="btn continue">Checkout</a></li>
    </ul>
  </div>
</div>
    </div>
  )
 
}