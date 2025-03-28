import { NavLink, useNavigate } from "react-router-dom"
import"./bars.css"
import { useContext, useEffect, useState } from "react";
import { Menu } from "../../context/MenuContext";
import axios from "axios";
import Cookie from 'cookie-universal'
export default function Sidebare(){
     const [menu,setMenue] = useState(false);
     const navigate = useNavigate();
     const [user,setuser] = useState([])
         useEffect(()=>{
          const token = Cookie()
       axios.get("https://e-commerce-backend-production-c659.up.railway.app/api/user",{
        headers:{
            Authorization:"Bearer " +token.get("cookie")
        }
        
    }).then((data)=>{
          if(data.data.role === "2001")
            navigate("/")
         setuser(data.data)
    }).catch((err)=>{
        console.log(err)
    
       })
    },[])
    return(
        <div className={`side_bar ${menu?"openn":"noopenn"}`} style={{width:menu.isOpen?"20%":"fit-content"}}>
               <div Class="links">
                   <ul>
                    {user.role === "1995"&&
                            <>
                  <li onClick={()=>setMenue((prive)=>!prive)} style={{justifyContent:menu.isOpen?"":"center"}}><NavLink end  style={{marginLeft:"0px"}}to="users"><span Class="textLink">Users<span Class="textLink"></span></span><i style={{fontSize:menu.isOpen?"18px":"25px"}} Class="fa-solid fa-users"></i></NavLink></li>
                    <li onClick={()=>setMenue((prive)=>!prive)} style={{justifyContent:menu.isOpen?"":"center"}}><NavLink end  style={{marginLeft:"0px"}}to="users/add"><span Class="textLink">AddUser<span Class="textLink"></span></span><i style={{fontSize:menu.isOpen?"18px":"25px"}} Class="fa-solid fa-user-plus"></i></NavLink></li>
                            </>
                    }
                    <li onClick={()=>setMenue((prive)=>!prive)} style={{justifyContent:menu.isOpen?"":"center"}}><NavLink end style={{marginLeft:"0px"}}to="categories"><span Class="textLink">Categ</span><i style={{fontSize:menu.isOpen?"18px":"25px"}} Class="fa-solid fa-bullhorn"></i></NavLink></li>
                    <li  onClick={()=>setMenue((prive)=>!prive)} style={{justifyContent:menu.isOpen?"":"center"}}><NavLink  style={{marginLeft:"0px"}}to="categories/addCategorie"><span Class="textLink">Add Categ</span> <i style={{fontSize:menu.isOpen?"18px":"25px"}} Class="fa-solid fa-plus"></i></NavLink></li>
                      <li onClick={()=>setMenue((prive)=>!prive)} style={{justifyContent:menu.isOpen?"":"center"}}><NavLink end style={{marginLeft:"0px"}} to="products">
                        <span   Class="textLink">Products</span><i  style={{fontSize:menu.isOpen?"18px":"25px"}}  Class="fa-solid fa-cart-plus"></i></NavLink></li>
                    <li onClick={()=>setMenue((prive)=>!prive)} style={{justifyContent:menu.isOpen?"":"center"}}><NavLink style={{marginLeft:"0px"}} to="products/addproduct"><span Class="textLink">AddProduct<span Class="textLink"></span></span><i style={{fontSize:menu.isOpen?"18px":"25px"}} Class="fa-solid fa-folder-plus"></i></NavLink></li>
                 
                   </ul>
               </div>
               <i onClick={()=>setMenue((prive)=>!prive)}className={`rightButton fa-solid fa-angles-${menu?"left":"right"}`}></i>
                <NavLink to={"/"}><i style={{fontSize:"30px"}} Class="fa-solid fa-house"></i></NavLink>
        </div>
    )
}
