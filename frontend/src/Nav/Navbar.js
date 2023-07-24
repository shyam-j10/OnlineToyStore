
import './Navbar.css'
import React, { useContext, useState } from 'react';
import { Link, useNavigate} from 'react-router-dom';
import logo from '../assets/logo.jpeg'
import { UserContext } from '../App';
import {GiHamburgerMenu} from 'react-icons/gi'
import { HideImage } from '@mui/icons-material';
import { useSelector } from 'react-redux';

function NavBar() {
  const {val1,val2}=useContext(UserContext);
  const [search,setSearch]=val1;
  const[logged,setLogged]=val2;


  const navigate=useNavigate();
    const handleSearch=(()=>{
      navigate("/shop/"+search);

    })
    return (
      
        <div className='container-nav'>
            <img src={logo} id='logo'></img>
            <div className='tools'>
                <Link to={'/'} id="home">HOME</Link>
                <Link to={'/shop'} id="shop">SHOP</Link>
                <Link to={'/about'} id="about">ABOUT US</Link>
                <Link to={'/cart'} id="cart"><i class="fa-solid fa-bag-shopping" style={{color:' #ffffff'}}></i></Link>
                <Link to={'/wishlist'} id="wishlist"><i class="fa-regular fa-heart"></i></Link>
            </div>
            <div className='third-nav'>
                <input type="text" id='inputsearch' placeholder='Search for toys you need..' onChange={(e)=>{setSearch(e.target.value)}}></input>
                <i class="fa-solid fa-magnifying-glass" id='search' onClick={handleSearch}></i>
            </div>
            <div className='btns1' style={{color:"white"}} >
              

              
              {/* <Link to={'/login'} id='reg'>
                <i class="fa-regular fa-user"/> 
                Login</Link> */}

              <Link to={'/signup'} id='regs'><i class="fa-solid fa-pen-to-square"></i> Account</Link>
            </div>
            {/* <div className='hamb'>
              <GiHamburgerMenu />
            </div> */}
        </div>
      );
}

export default NavBar;