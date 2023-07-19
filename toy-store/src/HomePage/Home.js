import React from 'react'
import { useState ,useEffect} from 'react'
import "./Home.css"
import {Link} from 'react-router-dom'


import home1 from '../assets/home1.webp'
import home4 from "../assets/home4.webp"
import home5 from "../assets/home5.webp"
import home8 from "../assets/home8.webp"
import Navbar from '../Nav/Navbar'




export default function Home() {
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
      <div className='body'>
          <div>
          <Link to='/shop'> <img src={arr[index]} id="slider"/> </Link>
          </div>
      </div>
    </div>
    
  )
}
