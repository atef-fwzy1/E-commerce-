import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Alert from '../components/Website/Alert';
import axios from 'axios';
import Cookie from 'cookie-universal'
import { Axios } from '../components/Axios';
import { useNavigate, useParams } from "react-router";
import LaoderTow from '../components/Website/LaoderTow';
import Laoder from '../components/Website/Loader';
export default function UpdateUsers(){
     let navigate = useNavigate();
     const [loader,setloader] = useState(false);
    const[user,setuers] = useState("");
    const[role,setRole] = useState()
 
    const cookie = Cookie();
    const token = cookie.get("cookie")
    // const ID =(window.location.pathname).split("/")[(window.location.pathname).split("/").length - 1]
    const Idprams = useParams();
    const ID = Idprams.id;
  
    useEffect(()=>{
      setloader(true)
          axios.get("https://e-commerce-backend-production-8649.up.railway.app/api/user/" +ID,{
        headers:{
            Authorization:"Bearer " +token
        }
    })
        .then((data)=>{
           setloader(false)
            setuers({name:data.data.name,email:data.data.email})
            setRole(data.data.role)
        }).catch((err)=>{
            navigate("dashboard/Not_found_user/404");
        })
    },[]) 
     

    function Handelsupmet(e){
        setloader(true)
        e.preventDefault()
          try{
                Axios.post("/user/edit/" + ID,{name:user.name,email:user.email,role})
        .then((data)=>{
        navigate(-1)
        setloader(false)
        })
          }catch(err){
                Alert("Internal Server ERROR")
          }
    }
    function HnadelInput(input){
        // console.log(a)
     setuers({...user,[input.target.name]:input.target.value})
    }
   
    return(
        <div Class="Updateuers">
          <h3 className='userstype'>update User</h3>
           <Form>
      <Form.Group Class="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control value={user.email} onChange={(event)=>{HnadelInput(event)}} name='email' type="email" placeholder="Enter email.." />
        <Form.Text Class="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group Class="mb-3" controlId="formBasicPassword">
        <Form.Label>Name</Form.Label>
        <Form.Control value={user.name} onChange={(event)=>{HnadelInput(event)}} name='name' type="name" placeholder="Enter name.." />
      </Form.Group>

      <Form.Group Class="mb-4" controlId="role">
        <Form.Label>Role</Form.Label>
        <Form.Select value={role} onChange={(event)=>{setRole(event.target.value)}} name='name' type="name" placeholder="Enter Role.." >
          <option selected>select Role</option>
          <option value={1995}>Admin</option>
          <option value={2001}>User</option>
          <option value={1999}>Prouduc</option>
          </Form.Select>
          
      </Form.Group>
      <Form.Group Class="mb-3" controlId="formBasicCheckbox">
      </Form.Group>
      {
        user === "" ?<Button className='primary loderdiv' variant="primary" type="none" onClick={(event)=>event.preventDefault()}><LaoderTow/></Button>: <Button className='primary' variant="primary" type="submit" onClick={(event)=> Handelsupmet(event)}>
        Submit
      </Button>
      }
     
    </Form>
     {loader &&  <Laoder/>}
        </div>
    )
}