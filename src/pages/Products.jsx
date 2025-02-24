
import TableComp from "../components/Table"
import"./categories.css"
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useEffect, useState } from "react"
import Cookie from 'cookie-universal'
import { Link, useNavigate } from "react-router-dom"
import { Axios } from "../components/Axios";
import Pagination from "../components/pagination";
export default function Products(){
    const cookie= Cookie();
       const[dok,setdok]=useState(1);
       const [products, setProducts] = useState();
       const [numberElement,setnumberElement] = useState(8)
       const [showLoader,setShowLoader] = useState(true)
      const navigate = useNavigate();
      const [limet,setlimet] = useState({last:0,now:5});
    const hederTable = [
     
  
        {
            key:"title",
            name:"title",
        },
            {
            key:"description",
            name:"Description"
        },{
              key:"price",
            name:"Price"
        }        ,{
              key:"rating",
            name:"Rating"
        },
      
    ]

              function pagination(type){
            if(type === "increment"){
                  if(products.length === limet.last + numberElement || limet.last  >  limet.now )
                    setlimet({last:0,now: numberElement})
                 else if(products.length < limet.now + numberElement)
                    setlimet({last:limet.last + (products.length - limet.now ) ,now:limet.now  + (products.length - limet.now )})
                    else
                 setlimet({last:limet.last+numberElement,now:limet.now + numberElement})
                }
            else if(limet.last > 0 )
            setlimet({last:0 ,now:numberElement})

        }
        useEffect(()=>{
          const token = cookie.get("cookie")
       Axios.get("/products")
       .then((data)=>{
        setShowLoader(false)
        setProducts(data.data)
      
    })
    .catch((err)=>{
           setShowLoader(false)
         console.log(err)
        
       })
    },[dok])

    function HandelDelete(id){
          Axios.delete("/product/"+id)
          .then(()=>{
           setdok(dok  +1 )
          }).catch((err)=>{
                 if(err.status === 401)
            navigate("/login")
            })
        }
    return(
        <div Class="Categorise " >

        <div Class="action">
           <h3 className='userstype'>All Products</h3>
         <Button className='primary'  variant="primary" type="submit" >
        <Link style={{color:"white"}}to={"addproduct"}>Add Product</Link>
      </Button>
        </div>
         <TableComp limet = {limet} haeder={hederTable} data={products} action={HandelDelete} deletes={"products"} showLoader={showLoader}type={"products"}/>
           <div Class="contpaginetion">
    <Form.Select style={{width:"20vh"}} aria-label="Default select example" onChange={(ele)=>{
             if(ele.target.value<= products.length){
         setnumberElement(Number(ele.target.value)) 
         setlimet({last:0,now:Number(ele.target.value)})
       }
       else{
                setnumberElement(Number( products.length)) 
         setlimet({last:0,now:Number(products.length)})
       }

    }}>
      <option value="3">3</option>
      <option value="5">5</option>
      <option value="10">10</option>
      <option value="15">15</option>
    </Form.Select>
         <Pagination pagiNationCntrole={pagination} page={limet.now}  numEle = {numberElement}/>
        </div>
        </div>
    )
}