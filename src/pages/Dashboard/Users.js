import axios from "axios"
import Cookie from 'cookie-universal'
import { useEffect, useState } from "react"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import { Axios } from "../../components/Axios";

import TableComp from "../../components/Table";
import { Link, useNavigate } from "react-router-dom";
import Pagination from "../../components/pagination";
export default function Users(){
    const cookie = Cookie();
    const[users,setusers]=useState([]);
    const[dok,setdok]=useState(1);
    const navigate = useNavigate();
    const [curentuser,setCurentuser] = useState([]);
     const [showLoader,setShowLoader] = useState(true)
       const [numberElement,setnumberElement] = useState(5)
      const [limet,setlimet] = useState({last:0,now:5});

 
    useEffect(()=>{
          const token = cookie.get("cookie")
       axios.get("https://e-commerce-backend-production-8649.up.railway.app/api/user",{
        headers:{
            Authorization:"Bearer " +token
        }
        
    }).then((data)=>{
        setCurentuser(data.data)})
        .catch((err)=>{
          alert("Unauthorized")
    })
    },[])
    
function HandelDelete(id){
      Axios.delete("user/"+id)
      .then(()=>{
       setdok(dok  +1 )
      }).catch((err)=>{
             if(err.status === 401)
              navigate("/login");

        })
    }

    useEffect(()=>{
          const token = cookie.get("cookie")
       axios.get("https://e-commerce-backend-production-8649.up.railway.app/api/users",{
        headers:{
            Authorization:"Bearer " +token
        }
        
    })
       .then((data)=>{
        setusers(data.data)
        setShowLoader(false)
        if(limet >data.data.length + 1){
           console.log( limet + " "  + data.data.length + 1)
          setlimet(data.data.length+ 1)
        }
       })
       .catch((err)=>{
         console.log("Unauthorized")
         if(err.status === 401)
        navigate("/login");
        setShowLoader(false)
       })
    },[dok])
     

    const hederTable = [
 
    {
          key:"name",
        name:"First Name"
 },
           {
        key:"email",
        name:"email"
      },
           {
         key:"role",
        name:"role"
      },
        {
         key:"updated_at",
        name:"updated_at"
      },     {
         key:"created_at",
        name:"created_at"
      }
      
    ]
          function pagination(type){
            if(type === "increment"){
                  if(users.length === limet.last + numberElement || limet.last  >  limet.now )
                    setlimet({last:0,now: numberElement})
                 else if(users.length < limet.now + numberElement)
                    setlimet({last:limet.last + (users.length - limet.now ) ,now:limet.now  + (users.length - limet.now )})
                    else
                 setlimet({last:limet.last+numberElement,now:limet.now + numberElement})
                }
            else if(limet.last > 0 )
            setlimet({last:0 ,now:numberElement})

        }
        
        
    return(
    <div className="users" >
        <div className="action">
           <h3 className='userstype'>All Users</h3>
         <Button className='primary'  variant="primary" type="submit" >
                 <Link  style={{color:"white"}}to={"add"}>Add uers</Link>
      </Button>
        </div>

    <TableComp  limet = {limet} haeder={hederTable} data={users} action={HandelDelete} deletes={"user"} courentUser={curentuser.id} type={"users"} showLoader={showLoader}/>
   <div className="contpaginetion">
    <Form.Select style={{width:"20vh"}} aria-label="Default select example" onChange={(ele)=>{
       if(ele.target.value<= users.length){
         setnumberElement(Number(ele.target.value)) 
         setlimet({last:0,now:Number(ele.target.value)})
       }
       else{
                setnumberElement(Number( users.length)) 
         setlimet({last:0,now:Number(users.length)})
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

