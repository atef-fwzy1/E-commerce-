import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import "./normalization/normaliz.css"
import "./all.min.css"
import MenueContext from './context/MenuContext';
import CartContext from './context/CardContext';
import ALertcontext from './context/AlerHandet';
import CardNumber from './context/numberCard';
import DepositContxet from './context/DepositCard';
import { BrowserRouter as Routerr } from 'react-router-dom';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ALertcontext>

  <DepositContxet>
  <CardNumber>
  <CartContext>
  <MenueContext>
  <React.StrictMode>
    <Routerr>
    <App />
    </Routerr>
  </React.StrictMode>
  </MenueContext>
  </CartContext>
  </CardNumber>
  </DepositContxet>
  </ALertcontext>
);


