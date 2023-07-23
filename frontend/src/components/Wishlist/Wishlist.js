import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import NavBar from '../../Nav/Navbar';
import { removeCart, removeWishlist } from '../../Redux/actions/action';
import "../Shop/Shop.css"

export default function Wishlist() {
    const dispatch=useDispatch();
    const [source,setSource]=useState([]);
    useEffect(() => {
      setSource(JSON.parse(localStorage.getItem("fav")));
    }, [])
    console.log(source)
    const remove=(id)=>{
  
      for(let i=0;i<source.length;i++){
        if(source[i].id === id){
          source.splice(i,1);
  
          localStorage.setItem("fav",JSON.stringify(source));
          document.location.reload();
        }
      }
      console.log(id);
    }
  return (
    <div>

        <NavBar/>
      <div className='products'>
        {source.map((product)=>
          <div className='product' key={product.id}>
 
              <img src={product.link} className='image'></img>
              <p>{product.des}</p>
              <div className='prices'>
                  <p id='price'> ₹{product.price}</p>
                  <p id='dprice'> ₹{product.dprice}</p>
                  <p id='dprice'> (Save{product.save}%)</p>
                </div>
              <div className='btns'>
                <h2 className='btnshop' 
                  onClick={()=>{
                    alert("Removed from favorites")
                    remove(product.id);
                  }}
                >Remove from Wishlist</h2>
              </div>
          </div>
        )}
      </div>
    </div>
  )
}
