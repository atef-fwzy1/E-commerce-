import { useEffect, useRef, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Axios } from '../components/Axios';
import {useNavigate, useParams } from "react-router";
import Laoder from '../components/Website/Loader';
import "./Addproduct.css"


export default function UpdateProduct(){
    
       const [ctegorie,setCategorie] = useState([]);
       const [images , setImages] = useState([]);
         const navigate = useNavigate();
        const Idprams = useParams();
    const ID = Idprams.id;
       const[Inputs,SetInputs] = useState({
        category:"",
        title:"",
        description:"",
        price:"",
        discount:"",
        About:"",
        stock:""
       })
       
     const [loader,setloader] = useState(false);

      useEffect(()=>{
       Axios.get("/categories")
       .then((data)=>{
         setCategorie(data.data)
    })
    .catch((err)=>{
        console.log(err.data)
       })
    },[])

        useEffect(()=>{
       Axios.get("/product/"+ID)
       .then((data)=>{
        console.log(data)
       SetInputs(data.data[0])
       setImages(data.data[0].images)
       
         setCategorie(data.data)
    })
    .catch((err)=>{
        console.log(err)
       })
    },[])


        function HandelEdit(event){
           event.preventDefault();
            const formdata = new FormData();
            formdata.append("category",Inputs.category)
            formdata.append("title",Inputs.title)
            formdata.append("description",Inputs.description)
            formdata.append("price",Inputs.price)
            formdata.append("discount",Inputs.discount)
            formdata.append("About",Inputs.About)
            formdata.append("stock",Inputs.stock)
            for(let i = 0 ; i < images.length ; i++){
              formdata.append("images[]",images[i])
            }
            Axios.post("/product/edit/"+ID,formdata).then((res)=>{
                 console.log(res)
                navigate("/dashboard/products")
          }).catch((err)=>{
                console.log(err)
            })
        }


        
           
    function deleteImage(id){
        Axios.delete("/product-img/"+id).then((res)=>console.log(res)).catch((err)=>console.log(err))
        let newImages = images.filter((ele)=>ele.id !== id)
        setImages(newImages)
      
      
    }
     const ShoeCategorie = ctegorie.map((ele,ind)=>{
         return(
              <option key={ind} value={ele.id} >{ele.title}</option>
            )
        })
        function HandelChange(ele){
            SetInputs({...Inputs,[ele.target.name]:ele.target.value});
           
        }


    const showImages =  images.map((ele,ind)=>{ 
        console.log(ele)
 return( 
  <div className='image_cont Updateimage_cont'>
    {
        ele.image+"".includes("http")?<img src={ele.image} alt='error'></img>:<img  src={URL.createObjectURL(ele)} alt='error'></img>
        
    }

   
        
         <i className="size fa-solid fa-trash" onClick={()=>{deleteImage(ele.id)}}></i>
        </div>)
})
 

            const focus = useRef(null);
            function Focus_input(){

               focus.current.click();
               
            } 
        return(
            <div className="Updateuers addproduct Updateproduct">
          <h3 className='userstype'>UpdateProducts</h3>
           <Form>
                  <Form.Group  key={120}className="mb-4" controlId="role">
        <Form.Label>category type</Form.Label>
        <Form.Select   value={Inputs.category} name="category" onChange={(event)=>{HandelChange(event)}} type="text" placeholder="category type" >
            <option selected >Select Categorie</option>
          {ShoeCategorie}
          </Form.Select>
          
      </Form.Group>

       <Form.Group key={10} className="mb-3" controlId="formBasicPassword">
        <Form.Label>name</Form.Label>
        <Form.Control value={Inputs.title} onChange={(event)=>{HandelChange(event)}} name='title' type="text" placeholder="Enter Title.." />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
      </Form.Group>
       
      <Form.Group key={10656545} className="mb-3" controlId="formBasicPassword">
        <Form.Label>description</Form.Label>
        <Form.Control value={Inputs.description} onChange={(event)=>{HandelChange(event)}} name='description' type="text" placeholder="Enter desc.." />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
      </Form.Group>

         <Form.Group key={14550} className="mb-3" controlId="formBasicPassword">
        <Form.Label>price</Form.Label>
        <Form.Control value={Inputs.price} onChange={(event)=>{HandelChange(event)}} name='price' type="text" placeholder="Enter price.." />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
      </Form.Group>

      <Form.Group key={142045} className="mb-3" controlId="formBasicPassword">
        <Form.Label>discount</Form.Label>
        <Form.Control  value={Inputs.discount} onChange={(event)=>{HandelChange(event)}} name='discount' type="text" placeholder="Enter discount.." />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
      </Form.Group>

      <Form.Group key={142045} className="mb-3" controlId="formBasicPassword">
        <Form.Label>discount</Form.Label>
        <Form.Control  value={Inputs.stock} onChange={(event)=>{HandelChange(event)}} name='stock' type="text" placeholder="Enter stock.." />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
      </Form.Group>
      
        <Form.Group key={1045} className="mb-3" controlId="formBasicPassword">
        <Form.Label>About</Form.Label>
        <Form.Control value={Inputs.About} onChange={(event)=>{HandelChange(event)}} name='About' type="text" placeholder="Enter About.." />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
      </Form.Group>

    <Form.Group controlId="formFile" className="mb-3">
        <Form.Label>Chose Image</Form.Label>
        <Form.Control  ref={focus}  hidden multiple required onChange={(ele)=>{
            
        setImages([...images,...ele.target.files])
        }} type="file" />
      </Form.Group>
      <div  className='focus_input' onClick={Focus_input}>
          <div>
             <i   class="fa-solid fa-upload"></i>
           <span >Uplaod iamges</span>
          </div>

      </div>
      
    <Button  className='primary'  variant="primary" type="none" onClick={(event)=>HandelEdit(event)}>
        Submit
      </Button>
      
     
    </Form>
     {loader &&  <Laoder/>}
          <div className='images'>
               {showImages}
          </div>
        </div>
    )
}