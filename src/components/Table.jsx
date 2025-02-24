import Table from 'react-bootstrap/Table';
import LoadetTow from "./Website/LaoderTow.js";
import { useState } from 'react';
import"../components/Dachboard/bars.css"
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import TransPortDate from './TransFormDate.jsx';
export default function TableComp({haeder,data=[],courentUser="" ,action,showLoader,type,limet}){
  


  const [search,setSearch] =useState();
        const Showheaders = haeder.map((ele)=>{
              if(ele.key ==="created_at"|| ele.key ==="updated_at")
        return <th className='dateNoMobile'>{ele.name}</th> 
               if(ele.key ==="email")
        return <th className='emailNoMobile'>{ele.name}</th> 
        return <th >{ele.name}</th> 
      })
        const limetData = [];
          let  searchData = [];

          if(data.length !== 0){

            if(type === "users")
              searchData = data.filter((ele)=>ele.name.toLowerCase().includes(search));
            else
            searchData = data.filter((ele)=>ele.title.toLowerCase().includes(search));
          }


        if(data.length > 0)
          for(let i= limet.last;i < limet.now;i++){
        limetData.push(data[i]);
        }
        const finelDat = searchData.length !== 0 ?searchData:limetData
        console.log(searchData.length)
        // const finelDat = limetData
        
        let showtabelcontent = [];
           if(finelDat.length >  0){

         showtabelcontent = data.map((ele1,ind)=>{
           return  <tr >
                 <td>{ind + limet.last + 1}</td>
                  {
            haeder.map((ele2)=>{
               
           if(ele2.key ==="role")
            return ( 
         <td>
            <>
            { ele1.role === '1995' ?"Admine":ele1.role=== '2001'?"User":ele1.role === "1996"?"Writer":"Products Maneger"
            }
           { ele1.id === courentUser && <span style={{color:"red", margin:"0px 10px"}}>(You)</span>}
        
            </>
        </td>)

        
               if(ele2.key ==="created_at"|| ele2.key ==="updated_at")
            return ( 
         <td className='dateNoMobile'>
             <sapn >{TransPortDate(ele1[ele2.key])}</sapn>
        </td>)
    if(ele2.key ==="email")
            return ( 
         <td className='emailNoMobile'>
             <sapn >{ele1[ele2.key]}</sapn>
        </td>)

       
            if(ele2.key ==="title" ||ele2.key ===  "description" ){
             return  <td>{ele1[ele2.key].slice(0,15) }</td>   
            }
           if(ele2.key ==="image" ){
             return <img style={{width:"55px",margin: "auto",display: "block"}} src={`https://e-commerce-backend-production-8649.up.railway.app${ele1.image}`} alt='error'></img>
            }
            else
            return  <td>{ele1[ele2.key] }</td>       
               
          })
         }
         {
           ele1.role ==="1995" || ele1.role === courentUser 
           ?
           <td Class="actions"><Link to={`${ele1.id}`}><i style={{cursor:"pointer"}} Class="fa-solid fa-pen-to-square"></i></Link></td>
           :
         <td  Class="actions"> <Link to={`${ele1.id}`}><i style={{marginLeft:"10px",cursor:"pointer"}}  Class="fa-solid fa-pen-to-square"></i></Link><i Class="fa-solid fa-trash" onClick={()=>{action(ele1.id)}} style={{marginLeft:"20px" ,color:"red" ,cursor:"pointer"}}></i></td>
         }
        </tr>
        })
      }
    return(
      <>
      <Form.Group style={{width:"20vh"}} Class="mb-3" controlId="formBasicPassword">
        <Form.Label>name</Form.Label>
        <Form.Control   key={10} value={search} onChange={(event)=>{setSearch(event.target.value)}} name='name' type="search" placeholder="search.." />
      </Form.Group>
 <Table striped bordered hover>
      <thead>
        <tr>
            <th>Id</th>
            {Showheaders}
          <th> Actions </th>
        </tr>
      </thead>
      <tbody>
       
      
       {data.length === 0 ?
       showLoader ?
       <tr style={{width:"fit-content", display:"flix",widows:"79",justifyContent:"center"}}>{<LoadetTow/>}</tr>:
       <td style={{color:"red" ,fontSize:"30px", top:"50%",position:"absolute", left:"40%"}}>No {type} found ? </td>:
       showtabelcontent}
  
     
      </tbody>
    </Table>
      </>
    )
}