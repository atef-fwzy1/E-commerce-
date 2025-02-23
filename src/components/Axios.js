import axios  from "axios";
import Cookie from 'cookie-universal'

const cookie = Cookie();
    const token = cookie.get("cookie");
export const Axios = axios.create(
   {
    baseURL:"https://e-commerce-backend-production-8649.up.railway.app/api",
    headers:{
        Authorization:"Bearer "+ token
    }
   } 
) 