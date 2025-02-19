import { useContext, useState } from 'react'
import './Auth.css'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

import Laoder from '../../components/Website/Loader';
import Cookie from 'cookie-universal'
import { Alert } from '../../context/AlerHandet';
export default function Register(){
const [error,seterror] = useState("");
  const[alert,setalert] = useState();
const [loader,setloader]=useState(false)
 const HndelAlert = useContext(Alert)
const navigate = useNavigate();
const[form,setform] =useState({
    name:"",
    email:"",
    password:"",
})
const[validform,setvalidform] =useState({
    name:false,
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
    if(form.name.length >= 3 && form.email.length >= 5 ){
    setloader(true)
    await axios.post("http://127.0.0.1:8000/api/register",form)
    .then((e)=>{
      setloader(false)
   HndelAlert.setIsopen({state:true,text:"Registration ",type:"good"})
         navigate("/login")
      seterror("Seccese Register")
    })
  }else
  throw("err")
}catch(ele){
    setalert("alertOn");
    console.log(ele)
    setloader(false)
    if(ele.status === 422)
      HndelAlert.setIsopen({state:false,text:"Email is Alreday been taken",type:"field"})
    else
    HndelAlert.setIsopen({state:false,text:"Internal Server Err" ,type:"field"})


  setTimeout(()=>{
 setalert("alertOff");
  },4000)
}

}
    return(
        <div className="containerr">
          <div className="login_Register">
               <form>
            <h2 className='type'>Register now </h2>
            <input  className='name' type="text" name="name" placeholder="Enter your name" value={form.name} onChange={(event)=>HandelInputs(event)} required minLength={6}></input>
            <label className='name'>Name </label>
            <input className='email' type="email" name="email" placeholder="Enter your email" value={form.email} onChange={(event)=>HandelInputs(event)} required></input>
              <label className='email'>Email </label>
            <input className='pass' type="password" name="password" placeholder="Enter your Password" avalue={form.password} onChange={(event)=>HandelInputs(event)} required minLength={6}></input>
              <label className='pass'>  Password </label>
             <button className='register' onClick={(event)=>{HandelSubmit(event)}}>Register</button>
           </form>
           <Link to={"/login"} className='tologin'> <sapn className='have'>Log in <i className="fa-solid fa-arrow-right fa-bounce"></i></sapn></Link>

          </div>
          {loader &&  <Laoder/>}
        </div>
    )
}