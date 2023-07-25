import React from 'react'
import { useState ,useEffect} from 'react'
import "./Home.css"
import {Link, useNavigate} from 'react-router-dom'


import home1 from '../assets/home1.webp'
import home4 from "../assets/home4.webp"
import home5 from "../assets/home5.webp"
import home8 from "../assets/home8.webp"
import home6 from "../assets/home6.jpg"
import home9 from "../assets/home9.jpg"
import hv1 from "../assets/hv1.mp4"
import Navbar from '../Nav/Navbar'
import Footer from '../Footer/Footer'

import home10 from '../assets/addtocart.gif'




export default function Home() {
  const getLego = () =>{
    navigate("/shop/lego")
  }
  const getHot = () =>{
    navigate("/shop/hotwheels")
  }
  const getNerf = () =>{
    navigate("/shop/nerf")
  }
  const getDisney = () =>{
    navigate("/shop/disney")
  }
  const getToyRus = () =>{
    navigate("/shop/toyrus")
  }
  const navigate=useNavigate();
  let arr=[home4,home5,home8];

  const [index,setIndex]=useState(0);

  useEffect(() => {
    setTimeout(()=>{
      if(index<arr.length-1){
        setIndex(index+1);
      }else{
        setIndex(0);
      }
    },2000)
  }, [index])

  return (
    <div className='wrap'>
      <Navbar/>
      <h2 className='head2'>
      JOIN THE KIDS SITE AND WIN MORE GIFTS !!
      </h2>
      <div className='body'>
          <div>
          <Link to='/shop'> <img src={arr[index]} id="slider"/> </Link>
          </div>

      </div>
      
      <div className='hom1'>
      <div className='babyshop'>
      {/* <h2 className='head1'>
      Toys and Games for Babies & Kids.
      </h2> */}
      <img src="https://kids.cmsmasters.net/wp-content/uploads/2015/07/8-2.jpg"/>
      <div>

      <h2 id='titlebaby'>
        Toys and Games For Babies & Kids
      </h2>

      <p id='babyp'>
      Toys play a crucial part in development of a child. Toys as simple as wooden blocks
       or numbered puzzle, develops cognitive and physical skills. Complex puzzles, remote 
       control cars, bubble guns helps learn and analyse cause effects and spatial relationships.
        Baby toys, rattles and bath toys enhances baby's attention and responses. Babies tend to
         play more and more with such toys and make themselves happy. Children's attitude towards 
         their toys nurtures them big way.
      </p>

      <button id='btnbaby' type='submit'>Shop Now</button>
      </div>
      </div>

      <h2 className='head1'>
      Online Toy Store with a plethora of variety and brands
      </h2>

      </div>
      <video width="1800" height="800" autoPlay loop style={{marginLeft:"0%"}}>
      <source src={hv1} type="video/mp4"/>
      </video>
      <p></p>
      <p></p>
      {/* <img src="https://www.funcorp.in/cdn/shop/files/MobiKwik_4-1_1270x.jpg?v=1671519550" style={{width:'1800px'}}/> */}
    
   
      {/* <img src={home9} style={{width:"1800px"}}/> */}
      {/* <img src={home6} style={{width:"1800px"}}/> */}
      
      {/* <Link to='shop'><img src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/summer02_desktop_feeding_&_kids_food_090523_01.jpg"/></Link> */}

      <div className='ourbrands'>
        <div>
          <center><h2>Our Brands</h2></center> 
        </div>
          <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/LEGO_logo.svg/2048px-LEGO_logo.svg.png' onClick={getLego}></img>
          <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRD9ssLdfAuubTtS1rXdpsj6JZjeXKS-GDSog&usqp=CAU' onClick={getHot}></img>

          <img src='https://www.brickfanatics.com/wp-content/uploads/Toys-R-Us-logo-featured-800x445.jpg' onClick={getToyRus}></img>
          <img src='https://cdn.pixelbin.io/v2/black-bread-289bfa/HrdP6X/original/hamleys-banner/1689163681sob.webp' onClick={getDisney}></img>
        
          <img src='https://cdn.pixelbin.io/v2/black-bread-289bfa/HrdP6X/original/hamleys-banner/1672213649573X771_NERF.webp' onClick={getNerf}></img>

      </div>
      
      
      <Footer/>
    </div>
    
  )
}
