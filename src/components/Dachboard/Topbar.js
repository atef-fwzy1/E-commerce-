import"./bars.css"
import Dropdown from 'react-bootstrap/Dropdown';
import {  useContext, useEffect, useState } from "react"

import { Axios } from "../Axios"
import Cookie from "cookie-universal";
 import {  Link, NavLink } from "react-router-dom";
 import Menuu from"../menu/Menu.jsx"
import { CardValue } from "../../context/numberCard";

import DropdownButton from 'react-bootstrap/DropdownButton';
export default function Topbar(){
    const Cardnum = useContext(CardValue)
    const[userName,setUserName] =useState({role:""});
     const[Openmenu,setOpenMenu] = useState(false)

    const cookie = Cookie(); 
    useEffect(()=>{
     
                        Axios.get("/user").then((data)=>{setUserName(data.data)}).catch((err)=>console.log(err))
    },[])

    function HandelLogot(){
        setUserName({role:""})
    Axios("/logout")
    .then((data)=>{
        cookie.remove("cookie")
   
    }).catch((err)=>{
        cookie.remove("cookie")
  
    })

    }
    useEffect(()=>{
        if(localStorage.getItem("products"))
    Cardnum.setNumber(JSON.parse(localStorage.getItem("products")).length)

},[])




 

    return(
        
        <div Class="Box">
            <Menuu openMenu={Openmenu}/>
        <div Class="topbard">
        <div Class="left">
             <NavLink to={"/"}><img Class="main-logo" src="/logo-site.png" alt="err"/></NavLink>

        </div>
        <ul Class="linkes larg-scern">
             <li  onClick={()=>setOpenMenu((prive)=>!prive)}><Link>Categories <i Class="fa-solid fa-chevron-down"></i></Link></li>
             <li><NavLink to={"/"}>Home</NavLink></li>
             <li><Link to={"aboutus"}>About Us</Link></li>
            {userName.role === "1995"  && <li><Link to={"/dashboard"}>DashBoard</Link></li>}
            
        </ul> 
   
           <div className={`mobile-screen`}>
               
                <DropdownButton  id="dropdown-basic-button " title={"Menu"}>
 
      <Dropdown.Item > <NavLink to={"/"}>Home</NavLink></Dropdown.Item>
      <Dropdown.Item ><span onClick={()=>setOpenMenu((prive)=>!prive)}>Categories <i Class="fa-solid fa-chevron-down"></i></span></Dropdown.Item>
      <Dropdown.Item > <NavLink to={"aboutus"}>About Us</NavLink></Dropdown.Item>
     {userName.role === "1995"  && <Dropdown.Item href="#/action-3"><NavLink to={"/dashboard"}>DashBoard</NavLink></Dropdown.Item>}
    </DropdownButton>
           </div>
        <div Class="right">
     {userName.role.length === 0 ?<NavLink to={"/login"}><div Class="go_login">login <i Class="fa-solid fa-arrow-right-to-bracket"></i></div> </NavLink>:<Dropdown>

          <Dropdown.Toggle variant="success" id="dropdown-basic" Class="dropdown">
          <i style={{cursor:"pointer"}} Class="fa-regular fa-user" onClick={()=>console.log("hello")}></i>
      </Dropdown.Toggle>
      <Dropdown.Menu>
    <NavLink to={"/login"}><Dropdown.Item  onClick={()=>{HandelLogot()}}>Logout</Dropdown.Item></NavLink>
      </Dropdown.Menu>
    </Dropdown>}
        </div>
<NavLink to={"products/cart"}>
       <div style={{border:"none"}} Class="cart" count={Cardnum.number}>
 <i style={{margin:'20px',marginRight: "6px"}} Class="fa-solid fa-cart-shopping"></i>
       cart
       </div>
</NavLink>
        </div>
      
        </div>
    )
}