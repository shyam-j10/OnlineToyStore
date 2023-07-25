
import './Navbar.css'
import React, { useContext, useState } from 'react';
import { Link, useNavigate} from 'react-router-dom';
import logo from '../assets/logo.jpeg'
import { UserContext } from '../App';
import {GiHamburgerMenu} from 'react-icons/gi'
import { useSelector } from 'react-redux';

function NavBar() {
  const {val1,val2}=useContext(UserContext);
  const [search,setSearch]=val1;
  const[logged,setLogged]=val2;

  const [selectedValue, setSelectedValue] = useState(''); 
 
  const handleChange = (event) => { 
    setSelectedValue(event.target.value); 
  }; 

  const logout = () =>{
    localStorage.clear();
    document.location.reload()
  }

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
                <Link to={'/contact'} id="contact">CONTACT</Link>
                <Link to={'/cart'} id="cart"><i class="fa-solid fa-bag-shopping" style={{color:' #ffffff'}}></i></Link>
                <Link to={'/wishlist'} id="wishlist"><i class="fa-regular fa-heart"></i></Link>
            </div>
            <div className='third-nav'>
                <input type="text" id='inputsearch' placeholder='Search for toys you need..' onChange={(e)=>{setSearch(e.target.value)}}></input>
                {/* <i class="fa-solid fa-magnifying-glass" onClick={handleSearch} ></i> */}
                <p onClick={handleSearch} id='glass'>🔍</p>
            </div>
            <div className='btns1' style={{color:"white"}} >
              <p >
                {localStorage.getItem("name")==null?"":"Hii,"+localStorage.getItem("name")}
                </p>
              <Link to={'/signup'} id='regs'><i class="fa-solid fa-pen-to-square"></i> Account</Link>
              <p id="reg" onClick={logout}>
              {localStorage.getItem("name")==null?"":"Logout"}
              </p>
            </div>
        </div>
      );
}

export default NavBar;