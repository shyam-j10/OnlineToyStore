import './App.css';
import Home from '../src/HomePage/Home';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import SignIn from './LogIn/SignIn';
import SignUp from './Register/SignUp';
import Shop from './components/Shop/Shop';
import { createContext,useState } from 'react';
import NavBar from './Nav/Navbar';
import Search from './Search/Search';
import Cart from './components/Cart/Cart';
import Wishlist from './components/Wishlist/Wishlist';


export const UserContext=createContext();
function App() {
   
  const [search,setSearch]=useState("");
 

  return (
    <UserContext.Provider value={[search,setSearch]}>
       <BrowserRouter>
          <Routes>
            <Route index element={<Home/>}></Route>
            <Route path='/nav' element={<NavBar/>}></Route>
            <Route path='/login' element={<SignIn/>}></Route>
            <Route path='/signup' element={<SignUp/>}></Route>
            <Route path='/shop' element={<Shop/>}></Route>
            <Route path='/cart' element={<Cart/>}></Route>
            <Route path='/wishlist' element={<Wishlist/>}></Route>
            <Route path='/shop/:search' element={<Search/>}></Route>
          </Routes>
      </BrowserRouter> 
    </UserContext.Provider>
  );
}

export default App;
