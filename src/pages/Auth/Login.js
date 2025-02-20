import { useContext, useState } from 'react'
import './Auth.css'
import { Link, useNavigate } from 'react-router-dom'
import Laoder from '../../components/Website/Loader';

import {Alert} from '../../context/AlerHandet';
import axios from 'axios';
import AlertDev from '../../components/alertMessage/Alert';
import Cookie from 'cookie-universal'
export default function Login(){
 
  const [loader,setloader]=useState(false)
  const[alert,setalert] = useState();
  const [error,seterror] = useState("");
  const cookie = Cookie(); 
  const HndelAlert = useContext(Alert)
const[form,setform] =useState({
    email:"",
    password:"",
})
const[validform,setvalidform] =useState({
    email:false,
    password:false,
})
function HandelInputs(e){
setform({...form,[e.target.name]:e.target.value})
if(form.name >= 3 )
  setvalidform({...validform,name:true})
else if(form.email >= 10  )
  setvalidform({...validform,email:true})
else if(form.password >= 8  )
  setvalidform({...validform,password:true})
}

async function HandelSubmit(e){
  e.preventDefault();
  try{
    if(form.password.length >= 3 && form.email.length >= 5 ){
    setloader(true)
   await axios.post("https://e-commerce-backend-production-6372.up.railway.app/api/login",
    {
      email:form.email,
      password:form.password,
    }
   )
    .then((e)=>{
      setloader(true)
      cookie.set("cookie",e.data.token)
      seterror("Seccese Login")
      
      HndelAlert.setIsopen({state:false,text:"logged in",type:"good"})
      window.location.pathname = "/"
    }).catch((err)=>{
    console.log(err)
      setloader(false)
      HndelAlert.setIsopen({state:false,text:"Wromg Email Or Password",type:"field"})
    })
  }else
  throw("err")
}catch(ele){
  setloader(false)
  setTimeout(()=>{
 setalert("alertOff");
  },4000)

}

}

    return(
        <div className="containerr">
          
          <div className="login_Register">
            <h2 className='type typeLogin '>Login Now </h2>
           <form>
             <input className='email' type="email" name="email" placeholder="Enter your email" value={form.email} onChange={(event)=>HandelInputs(event)} required></input>
              <label className='email emaillogin'>Email </label>
            <input className='pass' type="password" name="password" placeholder="Enter your Password" avalue={form.password} onChange={(event)=>HandelInputs(event)} required minLength={6}></input>
              <label className='pass'>  Password </label>
            <button className='register' onClick={HandelSubmit}>Log in </button>
           </form>
           
           <sapn className="orlogin">or login with</sapn>
           <div className='optionLogin'>
              <div className='cont_logo'>
                 <div className='facebook'>
                 <a href='https://www.facebook.com/'> <img  src={require("./img/facebook.png")}alt='facebook'/></a>
               </div>
               <div className='google'>
                   <a href={'https://e-commerce-backend-production-6372.up.railway.app/login-google'}>
                            <img src={require("./img/google.png")} alt='google'/>
                   </a>
               </div>
              </div>
            <Link to={"/register"} className='tologin'> <span className='have'>register<i class="fa-solid fa-arrow-right fa-bounce"></i></span></Link>
           </div>
           {error.length >= 1 && <Alert type={error} ioOpen={alert} />}
          </div>
           {loader &&  <Laoder/>}
        </div>
    )
}