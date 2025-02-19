import { useEffect, useState } from "react";
import { Axios } from "../Axios";
import Placeholder from 'react-bootstrap/Placeholder';
import ProductsCard from "./ProductsCard";
import"./productsCard.css"
export default function ProductsDiv(){
    const[latest,setlatest]=useState([])
    useEffect(()=>{
      Axios.get("/latest-sale").then((data)=>{
      setlatest(data.data)

     })
     .catch((err)=>console.log(err))
    },[])
            let showProdcuts =[] 
          if(latest.length> 0 ){

            latest.map((ele,ind)=>{
                
                  showProdcuts.push(
                      <ProductsCard img={ele.images[0]}title={ele.title}des={ele.description}price={ele.price}disc={ele.discount}rating={ele.rating} id={ele.id} element={ele}/> 
                    )
                })
            }
        
    return(
        <div className="Prod_cont">
                <h2 className="latest">latest sale products</h2>
            <section id="products">
                 {showProdcuts.length >0 ?showProdcuts:
                
        <>
                <div className="card"  style={{height:"20vh"}}>
  <Placeholder as="p" animation="glow">
        <Placeholder xs={12} />
      </Placeholder>
      <Placeholder as="p" animation="wave">
        <Placeholder xs={12} />
      </Placeholder>
                </div><div className="card"  style={{height:"20vh"}}>
   <Placeholder as="p" animation="glow">
        <Placeholder xs={12} />
      </Placeholder>
      <Placeholder as="p" animation="wave">
        <Placeholder xs={12} />
      </Placeholder>
                </div>
                < div className="card" style={{height:"20vh"}}>
   <Placeholder as="p" animation="glow" >
        <Placeholder xs={12} />
        <Placeholder xs={12} />
        <Placeholder xs={12} />
      </Placeholder>
      <Placeholder as="p" animation="wave">
        <Placeholder xs={12} />
        <Placeholder xs={12} />
        <Placeholder xs={12} />
      </Placeholder> </div>
      </>
                  
                }
   
 
            </section>
        </div>
    )
}