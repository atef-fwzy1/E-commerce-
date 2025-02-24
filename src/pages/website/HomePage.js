import {  useEffect, useState } from "react"
import { Axios } from "../../components/Axios"

import Hero from "../../components/hero/hero"
import Placeholder from 'react-bootstrap/Placeholder';
import OneProduct from "../../components/oneProduct"
import ProductsDiv from "../../components/ProductusSection/ProductsDiv"
import Toprated from "../../components/Toprated/NewCard"
import "./homepage.css"
import NewCard from "../../components/Toprated/NewCard"
import AllSkiles from "../../components/partners/AllSkills";
import Footer from "../../components/footer/Footer";
export default function HomePage(){

    const[latest,setLatest] =useState([])
    const[Toprate,setToprate] =useState([])
    const[loded,setLoded] =useState(true)

       useEffect(()=>{
       Axios.get("/latest").then((data)=>setLatest(data.data)).catch((err)=>console.log(err))
    },[])   
    useEffect(()=>{
       Axios.get("/top-rated").then((data)=>setToprate(data.data)).finally(()=>setLoded(false))
    },[])


    const showToprated = Toprate.map((ele,ind)=>{
      
        return(
            <Toprated   img={ele.images[0]}title={ele.title}des={ele.description}price={ele.price}disc={ele.discount}rating={ele.rating} id={ele.id} />

        )
    })
     const showlatest= latest.map((ele,ind)=>{
        return(
            <Toprated img={ele.images[0]}  element={ele}  title={ele.title}des={ele.description}price={ele.price}disc={ele.discount}rating={ele.rating}  id={ele.id} />

        )
    })

    return(
      
        <div Class="home">   
              
               <div Class="containter">
                     <Hero/>
                     <ProductsDiv/>
                     <OneProduct/>

                             <div Class="toprated">

                            <h2>Top Rated</h2>
                        <div Class="ratedCont">
                        {
                        loded?        <>
                <div Class="card"  style={{height:"20vh"}}>
  <Placeholder as="p" animation="glow">
        <Placeholder xs={12} />
      </Placeholder>
      <Placeholder as="p" animation="wave">
        <Placeholder xs={12} />
      </Placeholder>
                </div><div Class="card"  style={{height:"20vh"}}>
   <Placeholder as="p" animation="glow">
        <Placeholder xs={12} />
      </Placeholder>
      <Placeholder as="p" animation="wave">
        <Placeholder xs={12} />
      </Placeholder>
                </div>
                < div Class="card" style={{height:"20vh"}}>
   <Placeholder as="p" animation="glow" >
        <Placeholder xs={12} />
        <Placeholder xs={12} />
        <Placeholder xs={12} />
      </Placeholder>
      <Placeholder as="p" animation="wave">
        <Placeholder xs={12} />
      </Placeholder> </div>
      </>
                            
                            : showToprated
                        }
                        </div>
                        </div>
                             <OneProduct/>
                          <div Class="toprated">

                            <h2>Latest Products</h2>
                        <div Class="ratedCont">
                        {
                         loded?        <>
                <div Class="card"  style={{height:"20vh"}}>
  <Placeholder as="p" animation="glow">
        <Placeholder xs={12} />
      </Placeholder>
      <Placeholder as="p" animation="wave">
        <Placeholder xs={12} />
      </Placeholder>
                </div><div Class="card"  style={{height:"20vh"}}>
   <Placeholder as="p" animation="glow">
        <Placeholder xs={12} />
      </Placeholder>
      <Placeholder as="p" animation="wave">
        <Placeholder xs={12} />
      </Placeholder>
                </div>
              
                
                < div Class="card" style={{height:"20vh"}}>
   <Placeholder as="p" animation="glow" >
        <Placeholder xs={12} />
        <Placeholder xs={12} />
        <Placeholder xs={12} />
      </Placeholder>
      <Placeholder as="p" animation="wave">
        <Placeholder xs={12} />
      </Placeholder> </div>
      </>
                            
                            : showlatest
                        }
                        </div>
                        </div>
                  
               </div> 
                        <AllSkiles/>

                        <Footer/>
        </div>
    )
}