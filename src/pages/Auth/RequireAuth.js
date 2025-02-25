import axios from "axios";
import Cookie from "cookie-universal";
import { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import Laoder from "../../components/Website/Loader";
import { useNavigate } from "react-router-dom";
import Permissions from "../403";
export default function RequireAuth({AlloudRole=[], AuthCookie}){
    const cookie= Cookie();
    const navigate = useNavigate();
    const[user,setuser]=useState("");
    useEffect(()=>{

      axios.get("https://e-commerce-backend-production-c659.up.railway.app/api/user",{
        headers:{
          Authorization:"Bearer " + cookie.get("cookie")
        }
      }).then((data)=>{
        setuser(data.data)
      }).catch((err)=>{
        navigate("/login");
             console.log(err)
      })
},[])
   
    return(
     cookie.get("cookie")
       ?(user===""?<Laoder/>
       :AlloudRole.includes(user.role)?<Outlet/>
       :<Permissions/>):window.localStorage.pathname ="/login"

    )
}