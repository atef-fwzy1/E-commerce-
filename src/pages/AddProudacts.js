import { useEffect, useRef, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Axios } from '../components/Axios';
import { useNavigate } from "react-router";

import Laoder from '../components/Website/Loader';
import "./Addproduct.css"

export default function AddProuducts(){

       const navigate = useNavigate();
       const progressRef = useRef([]);
       const [ctegorie,setCategorie] = useState([]);
       const [images , setImages] = useState([]);
       const [sent,setSent] = useState(false);
       const [product_id,setProduct_id] = useState();
       const [imagesId ,setimagesId] = useState([]);
       const[Inputs,SetInputs] = useState({
        category:"",
        title:"",
        description:"",
        price:"",
        discount:"",
        About:"",
        stock:"5"
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

    const ShoeCategorie = ctegorie.map((ele,ind)=>{
         return(
              <option key={ind} value={ele.id} >{ele.title}</option>
            )
        })
        function HandelChange(ele){
            SetInputs({...Inputs,[ele.target.name]:ele.target.value});
            if(!sent){
              HandelDoumyData();
              setSent(true)
            }
          }
   
      const domyData =   {
        category:null,
        title:"Notfound",
        description:"Notfound",
        price:2222,
        discount:5545,
        About:"Notfound",
        stock:"5"
       }
 
        function HandelDoumyData(){
           Axios.post("/product/add",domyData).then((data)=>{
              setProduct_id(data.data.id);
                console.log(data)
          }).catch((err)=>{
                console.log(err)
            })
        }

              
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
            Axios.post("/product/edit/" +product_id,formdata).then((res)=>{
              console.log(res)
                navigate("/dashboard/products")
          }).catch((err)=>{
                console.log(err)
            })
        }
        
   let d= useRef(-1)

  //   start HandelImagesChaing
  async function HandelImagesChaing(e){ 
    setImages([...images,...e.target.files])
    const imaresFiles = e.target.files;
    const from =new FormData();
    
    for(let  i =   0 ; i < imaresFiles.length ; i++ ){
                   d.current++;
                 from.append("image",imaresFiles[i])
                from.append("product_id",product_id)
         const res =  await Axios.post("product-img/add",from,
                {onUploadProgress:(even)=>{
                    progressRef.current[d.current].attributes[0].value = Math.round((even.loaded / even.total) * 100)
                    progressRef.current[d.current].style.width =`${Math.round((even.loaded / even.total) * 100)}%`
                }}
              )
              .then((data)=>{
                setimagesId((prev)=>[...prev,data.data.id])
              }).catch((err)=>console.log(err))
      
        
            }
        }

        //   end HandelImagesChaing
        
           
    function deleteImage(id){
        Axios.delete("/product-img/"+imagesId[id]).then((res)=>console.log(res)).catch((err)=>console.log(err))
        let newImages = [...images]
        newImages.splice(id,1)
        setImages(newImages)
        let newIds = [...imagesId]
        newIds.splice(id,1)
        setimagesId(newIds)
         d.current--;
      
    }
    const showImages =  images.map((ele,ind)=>{ 
 return( 
  <div className='image_cont'>
       <img src={URL.createObjectURL(images[ind])} alt='error'></img>
    <div>
         <h2>{images[ind].name}</h2>
         <span className='size'>{images[ind].size / 102 < 900 ?(images[ind].size / 1024).toFixed(1)+" KB":(images[ind].size /( 1024  * 1024)).toFixed(1) + " MB"}</span>
    </div>
        <div className='progress'>
           <sapn  ref={(ele)=>{progressRef.current[ind] = ele}}  valueProgres={20} Class="area"></sapn>
        </div>
         <i Class="deleteImage fa-solid fa-trash" onClick={()=>{deleteImage(ind)}}></i>
        </div>)
})
 

            const focus = useRef(null);
            function Focus_input(){
              if(sent)
               focus.current.click();
               
            } 
        return(
            <div Class="Updateuers addproduct">
          <h3 className='userstype'>Add Products</h3>
           <Form>
                  <Form.Group  key={120}Class="mb-4" controlId="role">
        <Form.Label>category type</Form.Label>
        <Form.Select   value={Inputs.category} name="category" onChange={(event)=>{HandelChange(event)}} type="text" placeholder="category type" >
            <option selected >Select Categorie</option>
          {ShoeCategorie}
          </Form.Select>
          
      </Form.Group>

       <Form.Group key={10} Class="mb-3" controlId="formBasicPassword">
        <Form.Label>name</Form.Label>
        <Form.Control disabled={!sent} value={Inputs.title} onChange={(event)=>{HandelChange(event)}} name='title' type="text" placeholder="Enter Title.." />
      </Form.Group>
      <Form.Group Class="mb-3" controlId="formBasicCheckbox">
      </Form.Group>
       
      <Form.Group key={10656545} Class="mb-3" controlId="formBasicPassword">
        <Form.Label>description</Form.Label>
        <Form.Control disabled={!sent} value={Inputs.description} onChange={(event)=>{HandelChange(event)}} name='description' type="text" placeholder="Enter desc.." />
      </Form.Group>
      <Form.Group Class="mb-3" controlId="formBasicCheckbox">
      </Form.Group>

         <Form.Group key={14550} Class="mb-3" controlId="formBasicPassword">
        <Form.Label>price</Form.Label>
        <Form.Control disabled={!sent} value={Inputs.price} onChange={(event)=>{HandelChange(event)}} name='price' type="text" placeholder="Enter price.." />
      </Form.Group>
      <Form.Group Class="mb-3" controlId="formBasicCheckbox">
      </Form.Group>

       

      <Form.Group key={142045} Class="mb-3" controlId="formBasicPassword">
        <Form.Label>discount</Form.Label>
        <Form.Control disabled={!sent} value={Inputs.discount} onChange={(event)=>{HandelChange(event)}} name='discount' type="text" placeholder="Enter discount.." />
      </Form.Group>
      <Form.Group Class="mb-3" controlId="formBasicCheckbox">
      </Form.Group>

      <Form.Group key={14550} Class="mb-3" controlId="formBasicPassword">
        <Form.Label>price</Form.Label>
        <Form.Control disabled={!sent} value={Inputs.stock} onChange={(event)=>{HandelChange(event)}} name='stock' type="text" placeholder="Enter stock" />
      </Form.Group>
      <Form.Group Class="mb-3" controlId="formBasicCheckbox">
      </Form.Group>
      
        <Form.Group key={1045} Class="mb-3" controlId="formBasicPassword">
        <Form.Label>About</Form.Label>
        <Form.Control disabled={!sent} value={Inputs.About} onChange={(event)=>{HandelChange(event)}} name='About' type="text" placeholder="Enter About.." />
      </Form.Group>
      <Form.Group Class="mb-3" controlId="formBasicCheckbox">
      </Form.Group>

    <Form.Group controlId="formFile" Class="mb-3">
        <Form.Label>Chose Image</Form.Label>
        <Form.Control  ref={focus}  hidden multiple required onChange={(ele)=>{
            
        HandelImagesChaing(ele)
        }} type="file" />
      </Form.Group>
      <div style={{border:!sent&&"dotted 2px gray"}} className='focus_input' onClick={Focus_input}>
          <div>
             <i  style={{color:!sent&&"gray"}} Class="fa-solid fa-upload"></i>
           <span style={{color:!sent&&"gray"}}>Uplaod iamges</span>
          </div>

      </div>
      
    <Button  disabled={!sent} className='primary'  variant="primary" type="none" onClick={(event)=>HandelEdit(event)}>
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