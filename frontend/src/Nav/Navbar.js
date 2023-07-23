
import './Navbar.css'
import React, { useContext } from 'react';
import { Link, useNavigate} from 'react-router-dom';
import logo from '../assets/logo.jpeg'
import { UserContext } from '../App';
import {GiHamburgerMenu} from 'react-icons/gi'

function NavBar() {
  const [search,setSearch]=useContext(UserContext);


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
            <div className='btns1' >
              <button className='reg' onClick={()=>{navigate("/login")}}><i class="fa-regular fa-user"></i> Login</button>
              <button className='reg' onClick={()=>{navigate("/signup")}}> <i class="fa-solid fa-pen-to-square" style={{color: '#ffffff'}}></i> Sign-Up</button>
            </div>
            <div className='hamb'>
              <GiHamburgerMenu />
            </div>
        </div>
      );
}

export default NavBar;