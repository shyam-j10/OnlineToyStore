import React from 'react'
import Navbar from '../Nav/Navbar'
import "./About.css"
import { FcLike} from "react-icons/fc";
import { FcSms} from "react-icons/fc";
import { FcAbout} from "react-icons/fc";
import h1 from "../assets/h1.jpg"


export default function About() {
  return (
    <>
      <Navbar/>
      <div className='head11'>
      <h2>
        ABOUT US
      </h2>
      <p>Trendy Toy</p>
      </div>
      <div className='head12'>
        <p className='p2'>
        WELCOME TO OUR STORE
        </p>
        <p className='p1'>
            our goal is to make the kids happy!!
        </p>
      </div>
      <p className='p3'>
      We offer a wide selection of children’s clothing at the best prices.
       With fresh fashions, quality materials and fun designs, it’s the affordable 
       kids clothing brand that you can trust. You will find everything you need.
      </p>
      <img src="https://whiterabbit.axiomthemes.com/wp-content/uploads/2016/04/1-8.jpg" style={{width:'1800px'}}/>
      <div className='head13'>
        <img src="https://whiterabbit.axiomthemes.com/wp-content/uploads/2016/04/2-11.jpg"/>
        <p className='p4'>
            <span className='ss1'>A Faster and Better way to Shop</span> 
        <p></p>
        <span className='s1'>
            Our team of experts are here to help guide you 
        through making decisions. You can order online and don’t worry about 
        delivery. 
        The orders always arrive on time.</span>
        <h2>
        <FcLike className='ic'/> 
        <FcSms className='ic'/> 
        <FcAbout className='ic'/>

        </h2>

        </p>
      </div>
      <p></p>
     <img src={h1} style={{width:'1800px'}}/>
     <p className='word'>
     Elevate Your Style with the Latest Trends. Explore Fashion-forward
      Collections, Stay Ahead, and Express Your Unique Personality with Confidence in 
      Every Outfit You Wear."
     </p>
    </>
  )
}
