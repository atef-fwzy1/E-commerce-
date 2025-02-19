import 'bootstrap/dist/css/bootstrap.min.css';
import {  Route, Routes } from 'react-router-dom';
import './App.css';
import HomePaage from "./pages/website/HomePage"
import Login from "./pages/Auth/Login"
import Register from './pages/Auth/Register';
import Dashboard from './pages/Dashboard/Dashboard';
import GoogleCallBack from './pages/Auth/GoogleCallBack';
import Users from './pages/Dashboard/Users';
import RequireAuth from './pages/Auth/RequireAuth';
import PageNotFound from './pages/PageNotFound';
import UpdateUsers from './pages/UpdateUsers';
import Writer from './pages/Writer';
import AddNewUser from './pages/AddNewUser';
import RequireBack from './pages/Auth/RequireBack';
import Categories from './pages/Categories';
import AddCategorie from './pages/AddCategorie';
import UpdateCategorie from './pages/UpdateCategorie';
import Products from './pages/Products';
import AddProuducts from './pages/AddProudacts';
import UpdateProduct from './pages/UpdateProduct';
import Topbar from './components/Dachboard/Topbar';
import TextAnimation from './components/textAnimation/TextAnimation';
import DetailsProduct from './components/detailsProduct/DetailsProduct';
import { Menu } from './context/MenuContext';
import DetilsCategories from './components/Categories/DetilsCategories';
import { useContext } from 'react';
import CategoriesList from './components/CategoriesList';
import CartPage from './components/cartPage/Cartpage';
import AlertDev from './components/alertMessage/Alert';
import AboutUs from './components/AboutUs/AboutUs';

function App() {
  console.log(window.location.pathname)
     const menu = useContext(Menu);
  return (
    <div className="App">
        {

     menu.isOpen&&<CategoriesList/>
       }

      
  <Topbar/>
       <AlertDev/>
      <Routes>
        
        <Route path='/' element={<HomePaage/>} />
        <Route path='/ctegoriesDet/:id' element={<DetilsCategories/>} />
        
        <Route path='product/:id' element={<DetailsProduct/>}/>
        <Route path='products/cart' element={<CartPage/>}/>
        <Route path='aboutUs' element={<AboutUs/>}/>
        {/* glople Componanets */}
        <Route element={<RequireBack/>}>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        </Route>
        <Route path='/auth/google/callback' element={<GoogleCallBack/>}/>
             {/* //auth */}
  
              <Route path='/dashboard' element={<Dashboard/>}>
            <Route element={<RequireAuth AlloudRole={["1995"]} />}  >  
                <Route path='users'  element={<Users/>}></Route>
                <Route path='users'  element={<Users/>}></Route>
                <Route path='users/add'  element={<AddNewUser/>}></Route>
                <Route path='' element={<TextAnimation/>}/>
                <Route path='users/:id' element={<UpdateUsers/>}/>
            </Route>
              
         <Route element={<RequireAuth AlloudRole={["2001","1995"]} />}   > 
             <Route path='writer' element={<Writer/>}/>
             </Route>    

                 <Route element={<RequireAuth AlloudRole={["1999","1995"]} />}>
                  {/*categories  */}
             <Route path='categories' element={<Categories/>}/>
             <Route path='categories/addCategorie' element={<AddCategorie/>}/>
             <Route path='categories/:id' element={<UpdateCategorie/>}/>
                  {/*categories  */}

                  {/* Products */}
                 <Route path='products'  element={<Products/>}/>
                 <Route path='products/addproduct'  element={<AddProuducts/>}/>
                 <Route path='products/:id'  element={<UpdateProduct/>}/>
                  {/* Products */}
             </Route>   
        </Route>

    
  <Route path="*" element={<PageNotFound/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
