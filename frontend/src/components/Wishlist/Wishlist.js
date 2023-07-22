import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import NavBar from '../../Nav/Navbar';
import { removeCart, removeWishlist } from '../../Redux/actions/action';
import "../Shop/Shop.css"

export default function Wishlist() {
    const dispatch=useDispatch();
    const prod=useSelector(state=>state)
    const source=prod.allProducts.favProduct;
  return (
    <div>

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
                <h2 className='btnshop' 
                  onClick={()=>{
                    dispatch(removeWishlist(product))
                  }}
                >Remove from Wishlist</h2>
              </div>
          </div>
        )}
      </div>
    </div>
  )
}
