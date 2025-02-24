import { cache, useEffect, useRef, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Axios } from '../components/Axios';
import { useNavigate } from "react-router";

import Laoder from '../components/Website/Loader';
import axios from 'axios';
export default function UpdateCategorie(){
     let navigate = useNavigate();
     const CateId = (window.location.pathname.split("/"))[3]
   
     const [title,setTitle] = useState("");
     const [image,setimage] = useState("");
     const [loader,setloader] = useState(false);
      const form = new FormData();
      form.append("title",title)
      form.append("image",image)
 

       useEffect(()=>{
         axios.get("https://e-commerce-backend-production-8649.up.railway.app/api/category/"+CateId)
         .then((data)=>{
           setTitle(data.data.title)
          }).catch((err)=>{

          })
},[])


    function Handelsupmet(e){
        setloader(true)
        e.preventDefault()
         Axios.post("/category/edit/"+CateId,form)
        .then((data)=>{
             navigate("/dashboard/categories")
        setloader(false)
    }).catch((err)=>{
      setloader(false)
        })
         
    }

    return(
        <div Class="Updateuers">
          <h3 className='userstype'>Update Categorie</h3>
           <Form>

       <Form.Group key={10} Class="mb-3" controlId="formBasicPassword">
        <Form.Label>name</Form.Label>
        <Form.Control value={title} onChange={(event)=>{setTitle(event.target.value)}} type="text" placeholder="Enter Title.." />
      </Form.Group>
      <Form.Group Class="mb-3" controlId="formBasicCheckbox">
      </Form.Group>

      <Form.Group controlId="formFile" Class="mb-3">
        <Form.Label>Chose Image</Form.Label>
        <Form.Control required onChange={(ele)=>{
        setimage(ele.target.files.item(0))
        }} type="file" />
      </Form.Group>
      
    <Button className='primary' disabled={title.length <= 3|| image.length <= 5 ?true:false } variant="primary" type="none" onClick={(event)=>Handelsupmet(event)}>
        Submit
      </Button>
      
     
    </Form>
     {loader &&  <Laoder/>}

        </div>
    )
}