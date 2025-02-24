import Pagination from "../components/pagination";
import TableComp from "../components/Table"
import"./categories.css"
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useEffect, useState } from "react"
import Cookie from 'cookie-universal'
import { Link, useNavigate } from "react-router-dom"
import { Axios } from "../components/Axios";
export default function Categories(){
    const cookie= Cookie();
       const[dok,setdok]=useState(1);
       const [categories, setCategories] = useState([{
        created_at: "",id: 1,image: "",title: "",updated_at: ""}]);
       const [showLoader,setShowLoader] = useState(true)
       const [numberElement,setnumberElement] = useState(5)
       const [limet,setlimet] = useState({last:0,now:5});
    
      const navigate = useNavigate();
     
    const hederTable = [
      {
            key:"title",
            name:"title",
        },
      
            {
            key:"image",
            name:"image"
        },
        {
         key:"updated_at",
        name:"updated_at"
      },     {
         key:"created_at",
        name:"created_at"
      }
    ]
        useEffect(()=>{
        
       Axios.get("/categories")
       .then((data)=>{
        setShowLoader(false)
        console.log(data.data)
        setCategories(data.data)
    })
    .catch((err)=>{
           setShowLoader(false)
         console.log(err)
        
       })
    },[dok])
    function HandelDelete(id){
          Axios.delete("/category/"+id)
          .then(()=>{
           setdok(dok  +1 )
          }).catch((err)=>{
                 if(err.status === 401)
            navigate("/login")
            })
        }
        function pagination(type){
            if(type === "increment"){
                  if(categories.length === limet.last + numberElement || limet.last  >  limet.now )
                    setlimet({last:0,now: numberElement})
                 else if(categories.length < limet.now + numberElement)
                    setlimet({last:limet.last + (categories.length - limet.now ) ,now:limet.now  + (categories.length - limet.now )})
                    else
                 setlimet({last:limet.last+numberElement,now:limet.now + numberElement})
                }
            else if(limet.last > 0 )
            setlimet({last:0,now:numberElement})

        }
    return(
        <div Class="Categorise " >

        <div Class="action">
           <h3 className='userstype'>All Categories</h3>
         <Button className='primary'  variant="primary" type="submit" >
        <Link style={{color:"white"}}to={"addCategorie"}>Add Categorie</Link>
      </Button>
        </div>
         <TableComp limet = {limet} haeder={hederTable} data={categories} action={HandelDelete} deletes={"categorie"} showLoader={showLoader}type={"categorie"}/>
         <div Class="contpaginetion">
    <Form.Select style={{width:"20vh"}} aria-label="Default select example" onChange={(ele)=>{
         if(ele.target.value<= categories.length){
         setnumberElement(Number(ele.target.value)) 
         setlimet({last:0,now:Number(ele.target.value)})
       }
       else{
                setnumberElement(Number( categories.length)) 
         setlimet({last:0,now:Number(categories.length)})
       }

    }}>
      <option value="3">3</option>
      <option value="5">5</option>
      <option value="10">10</option>
      <option value="15">15</option>
    </Form.Select>
          <Pagination pagiNationCntrole={pagination} page={limet.now} numEle = {numberElement}/>
         </div>
        </div>
    )
}