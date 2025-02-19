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
              await axios.get("http://127.0.0.1:8000/api/user",{
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