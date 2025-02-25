import axios from "axios"
import Cookie from "cookie-universal";
import { useEffect } from "react"
import { useLocation } from "react-router-dom"

export default function GoogleCallBack(){
  const cookie= Cookie();
    const location = useLocation();
     function CallBack(){
          useEffect(()=>{
     
        axios.get("https://e-commerce-backend-production-c659.up.railway.app/api/auth/google/callback"+location.search)
       .then((res)=>{
         console.log(res)
         cookie.set("cookie",res.data.access_token)
       })   
        .catch((err)=>{

          console.log(err)
        })
        
    },[])
     }
     CallBack();
    return(
        <h1>GoogleCallBack</h1>
    )
}