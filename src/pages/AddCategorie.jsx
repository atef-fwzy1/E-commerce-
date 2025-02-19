import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Axios } from '../components/Axios';
import { useNavigate } from "react-router";

import Laoder from '../components/Website/Loader';
export default function AddCategorie(){
       const navigate = useNavigate();
     const [title,setTitle] = useState("");
     const [image,setimage] = useState("");
     const [loader,setloader] = useState(false);
    const[role,setRole] = useState()
      const form = new FormData();
      form.append("title",title)
      form.append("image",image)
   
    function Handelsupmet(e){
        setloader(true)
        e.preventDefault()
         Axios.post("/category/add",form)
        .then((data)=>{
             navigate("/dashboard/categories")
             console.log(data)
        setloader(false)
    }).catch((err)=>{
      console.log(err)
      setloader(false)
        })
         
    }

    return(
        <div className="Updateuers">
          <h3 className='userstype'>Add Categorie</h3>
           <Form>

       <Form.Group key={10} className="mb-3" controlId="formBasicPassword">
        <Form.Label>name</Form.Label>
        <Form.Control value={title} onChange={(event)=>{setTitle(event.target.value)}} type="text" placeholder="Enter Title.." />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
      </Form.Group>

      <Form.Group controlId="formFile" className="mb-3">
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