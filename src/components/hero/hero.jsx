import "./hero.css"
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useContext, useState } from "react";
import CategoriesList from "../CategoriesList";
import { Menu } from "../../context/MenuContext";
export default function Hero(){

    const [search,setSearch] =useState();
return(
 <div  Class="hero_section">
        <div Class="hero-cont" style={{backgroundImage:"url(hero-bg.jpg)"}}>
       <Form.Group Class="home-serach" style={{width:"30vh",flexGrow:"1.3"}}  controlId="formBasicPassword" >
        <Form.Control   key={10} value={search} onChange={(event)=>{setSearch(event.target.value)}} name='name' type="search" placeholder="search Products" />
      </Form.Group>
              <div Class="box">

 <h1 Class="heder">grpa upto 50% off on selected headphone </h1>
        <Button variant="success">Success</Button>
              </div>
        </div>
      
 </div>
)
}