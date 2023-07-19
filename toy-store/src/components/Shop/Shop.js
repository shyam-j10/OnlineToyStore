import React, { useEffect, useState } from 'react'
import shop1 from '../../assets/shop1.jpg'
import shop2 from '../../assets/shop2.webp'
import shop3 from '../../assets/shop3.webp'
import shop4 from '../../assets/shop4.webp'
import shop5 from '../../assets/shop5.webp'
import shop6 from '../../assets/shop6.jpeg'
import shop7 from '../../assets/shop7.webp'
import shop8 from '../../assets/shop8.webp'
import shop9 from '../../assets/shop9.jpg'
import shop10 from '../../assets/shop10.webp'
import shop11 from '../../assets/shop11.avif'
import "./Shop.css"

import NavBar from '../../Nav/Navbar'
import { useDispatch, useSelector } from 'react-redux'
import { cartProducts, favProducts} from '../../Redux/actions/action'


export default function Shop() {
  const[arr,setArr]=useState([]);
  const dispatch=useDispatch();
  const prod=useSelector(state=>state)
    const source=[
      {"id":1,"link":"https://m.media-amazon.com/images/I/81kfaJXnEXL._SX679_.jpg","category":"Building Kit/Toy","brand":"Lego","age":"3+","desc":"Lego's City Stunt Plane Building Set","price":1150,"dprice":1025,"save":10},
      {"id":2,"link":"https://m.media-amazon.com/images/I/41TS30fYizL._SX300_SY300_QL70_FMwebp_.jpg","category":"Electric Toys","brand":"HotWheels","age":"6+","desc":"Hotwheels's Mercedes-Benz","price":1700,"dprice":1550,"save":9},
        {"id":3,"link":"https://m.media-amazon.com/images/I/61ifmdT0S+L._SX679_.jpg","category":"Electric Toys","brand":"Lego","age":"6+","desc":"Lego's City Electric Sports Car","price":960,"dprice":850,"save":12},
        {"id":4,"link":"https://m.media-amazon.com/images/I/614NJhExrvL._AC_UL800_FMwebp_QL65_.jpg","category":"Puzzle Toys","brand":"Lego","age":"6+","desc":"Lego's Batman Building Set","price":3050,"dprice":2900,"save":5},
        {"id":5,"link":"https://m.media-amazon.com/images/I/71naWAemcJL._SX679_.jpg","category":"Castle Toy","brand":"Lego/Disney","age":"6+","desc":"Disney's Elsa Castle Building Set","price":1150,"dprice":1025,"save":10}, 
        {"id":6,"link":"https://whiterabbit.axiomthemes.com/wp-content/uploads/2016/04/2-7.jpg","category":"Tower Sets","brand":"White Rabbit","age":"3+","desc":"White Rabbit's Rainbow Tower Set","price":2870,"dprice":2750,"save":5},
        {"id":7,"link":"https://rukminim2.flixcart.com/image/832/832/xif0q/outdoor-toy/v/d/l/-original-imaggffthhucxqrm.jpeg?q=70","category":"Scooter","brand":"Toy R Us","age":"6+","desc":"Toy R us's Multicolor Scooter","price":1650,"dprice":1400,"save":15},
        {"id":8,"link":"https://m.media-amazon.com/images/I/51twYjKg2mL._SX679_.jpg","category":"Toy Gun","brand":"Nerf","age":"6+","desc":"Nerf's Elite Blaster Toy Gun","price":2600,"dprice":2470,"save":5},
        {"id":9,"link":"https://m.media-amazon.com/images/I/81mEHSkhnnL._SX679_.jpg","category":"Toy Gun","brand":"Nerf","age":"6+","desc":"Nerf's ShockWave Toy Gun","price":2850,"dprice":2700,"save":6},
        {"id":10,"link":"https://m.media-amazon.com/images/I/619f6i3kiRL._SX679_.jpg","category":"Board Games","brand":"Wembley","age":"6+","desc":"Wembley's Indoor Foosball Table","price":1800,"dprice":1600,"save":12},
        {"id":11,"link":"https://www.hamleys.com/media/catalog/product/6/1/614800_main_hcjohzu2kwkvugox.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=700&width=700&canvas=700:700","category":"Soft Toys","brand":"Hamleys","age":"3+","desc":"Hamley's Soft Unicorn Toy","price":1500,"dprice":1350,"save":10}
        ] 

  return (
    <>
      <NavBar/>
      <div className='products'>
        {source.map((product)=>
          <div className='product' key={product.id}>
 
              <img src={product.link} className='image'></img>
              <p>{product.desc}</p>
              <div className='prices'>
                  <p id='price'> ₹{product.price}</p>
                  <p id='dprice'> ₹{product.dprice}</p>
                  <p id='dprice'> (Save{product.save}%)</p>
                </div>
              <div className='btns'>
                {/* <h2 className='btnshop' 
                onClick={()=>{
                  dispatch(favProducts(product))
                }}
                >Add To Wishlist</h2> */}
                <h2 className='btnshop' 
                  onClick={()=>{
                    dispatch(cartProducts(product))
                  }}
                >Add To cart</h2>
              </div>
          </div>
        )}
      </div>
    </>
  )
}
