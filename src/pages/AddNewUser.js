import { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Axios } from '../components/Axios';
import { useNavigate } from "react-router";

import Laoder from '../components/Website/Loader';
import { Alert } from '../context/AlerHandet';
export default function AddNewUser(){
     let navigate = useNavigate();
     const [loader,setloader] = useState(false);
    const[user,setuers] = useState({name:"",email:"",password:""});
    const[role,setRole] = useState()
   
    const HndelAlert = useContext(Alert)
    function Handelsupmet(e){
        setloader(true)
        e.preventDefault()
           Axios.post("/user/add",{name:user.name,email:user.email,password:user.password,role:role})
        .then((data)=>{
          console.log(data)
          HndelAlert.setIsopen({state:false,text:"Added New User ",type:"good"})
        navigate("/dashboard/users")
        setloader(false)
        console.log(data)
       
      }).catch((err)=>{
        setloader(false)
        console.log(err)
        HndelAlert.setIsopen({state:false,text:"Please fill in the data.",type:"field"})
        
   
        })
         
    }
    function HnadelInput(input){
     setuers({...user,[input.target.name]:input.target.value})
    }
    return(
        <div className="Updateuers">
          <h3 className='userstype'>Add New User</h3>
           <Form>

       <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>name</Form.Label>
        <Form.Control   key={10} value={user.name} onChange={(event)=>{HnadelInput(event)}} name='name' type="name" placeholder="Enter name.." />
      </Form.Group>

      <Form.Group   className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control key={102} value={user.email} onChange={(event)=>{HnadelInput(event)}} name='email' type="email" placeholder="Enter email.." />
      </Form.Group>

      <Form.Group key={105} className="mb-3" controlId="formBasicPassword">
        <Form.Label>name</Form.Label>
        <Form.Control key={105} value={user.password} onChange={(event)=>{HnadelInput(event)}} name='password' type="password" placeholder="Enter pass.." />
      </Form.Group>

      <Form.Group  key={120}className="mb-4" controlId="role">
        <Form.Label>Role</Form.Label>
        <Form.Select value={role} onChange={(event)=>{setRole(event.target.value)}} name='name' type="name" placeholder="Enter Role.." >
          <option disabled>select Role</option>
          <option value="1995" >Admin</option>
          <option value='2001'>User</option>
          <option value="1996">Writer</option>
          <option value="1999">Product</option>
          </Form.Select>
          
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicCheckbox">

      </Form.Group>
      
    <Button className='primary' disabled={user.name.length  <2 || user.email.length <= 8 || role ==="undefined"?true:false } variant="primary" type="none" onClick={(event)=>Handelsupmet(event)}>
        Submit
      </Button>
      
     
    </Form>
     {loader &&  <Laoder/>}

        </div>
    )
}