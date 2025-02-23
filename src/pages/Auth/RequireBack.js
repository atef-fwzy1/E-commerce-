import axios from "axios";
import { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import Cookie from"cookie-universal"
export default function RequireBack({Auth}){
    const [Author,setAuthor] = useState(false);
        const cookie = Cookie();
        useEffect(()=>{
          const token = cookie.get("cookie")
          let autho =async ()=>{
              await axios.get("https://e-commerce-backend-production-8649.up.railway.app/api/user",{
                  headers:{
                      Authorization:"Bearer " +token
                    }
                }).then((data)=>{
                    setAuthor(true)
                    console.log("then")
                })
                .catch((err)=>{
                    setAuthor(false)
                    console.log("catch")
                })
            }
            autho();
       },[])
console.log(Author)
    return(
          Author ?window.history.back():<Outlet/>
            
    )
}