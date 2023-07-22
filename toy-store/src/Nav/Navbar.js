
import './Navbar.css'
import React, { useContext } from 'react';
import { Link, useNavigate} from 'react-router-dom';
import logo from '../assets/logo.jpeg'
import { UserContext } from '../App';

function NavBar() {
  const [search,setSearch]=useContext(UserContext);


  const navigate=useNavigate();
    const handleSearch=(()=>{
      navigate("/shop/"+search);

    })
    return (
        <div className='container-nav'>
            <div className='company'>
              <img src={logo}></img>
            </div>
            <div className='tools'>
                <Link to={'/'} id="home">HOME</Link>
                <Link to={'/shop'} id="shop">SHOP</Link>
                <Link to={'/about'} id="about">ABOUT US</Link>
                <Link to={'/cart'} id="cart">CART</Link>
                <Link to={'/wishlist'} id="wishlist">WISHLIST</Link>
            </div>
            <div className='third-nav'>
              <div className='btns1' >

            <button className='reg' onClick={()=>{navigate("/login")}}>Login</button>
            {/* <h5>/</h5> */}
              <button className='reg' onClick={()=>{navigate("/signup")}}>Register</button>
              </div>
              <div className='searcharea' style={{display:'flex'}}>
                <i class="fa-solid fa-magnifying-glass" id='search' onClick={handleSearch}></i>
                <input type="text" id='inputsearch' placeholder='Search' onChange={(e)=>{setSearch(e.target.value)}}></input>
              </div>
            </div>
            
           
        </div>
      );
}

export default NavBar;