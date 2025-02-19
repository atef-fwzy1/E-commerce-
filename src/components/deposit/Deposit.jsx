import React, { useState } from 'react';
import Cards from 'react-credit-cards';
import"./deposit.css"
 import"react-credit-cards/lib/styles.scss"
import Button from '../button/Button';
import { useContext } from 'react';
import { NavLink } from 'react-bootstrap';

export default class PaymentForm extends React.Component { 
  state = {
    cvc: '',
    expiry: '',
    focus: '',
    name: '',
    number: '',
  };

  handleInputFocus = (e) => {
    this.setState({ focus: e.target.name });
  }
  
  handleInputChange = (e) => {
    const { name, value } = e.target;
    
    this.setState({ [name]: value });
  }
  
  render() {
    return (
      <div className='Boxdeposit'>
<div id="PaymentForm">
        <Cards
          cvc={this.state.cvc}
          expiry={this.state.expiry}
          focused={this.state.focus}
          name={this.state.name}
          number={this.state.number}
        />
        <form>
        	<div className='cloumn'>
                      <input
            type="tel"
            name="number"
            placeholder="Card Number"
            onChange={this.handleInputChange}
            onFocus={this.handleInputFocus}
          />
        
          <input
            type="tel"
            name="name"
            placeholder="Card name"
            onChange={this.handleInputChange}
            onFocus={this.handleInputFocus}
          /> 
            </div>
          <div className='rowws'>
          <input
          type="tel"
          name="expiry"
          placeholder="Card expiry"
          onChange={this.handleInputChange}
          onFocus={this.handleInputFocus}
          /><input
          type="tel"
          name="cvc"
          placeholder="Card cvc"
            onChange={this.handleInputChange}
            onFocus={this.handleInputFocus}
            />
            </div>
        </form>
      <div style={{width:"100%",display:"flex",alignItems:"center",justifyContent:"space-evenly",gap:"15px"}}><NavLink to={'/'} href='/'><Button value={"Submit"}/></NavLink> <NavLink to={'/'}  href='/'><Button value={"Cancel"}/></NavLink></div>
        <span style={{display:"block"}}></span>
      </div>
      </div>
    );
  }
}