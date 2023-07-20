import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import NavBar from '../../Nav/Navbar';
import { cartProducts, removeCart } from '../../Redux/actions/action';
import "../Shop/Shop.css"

export default function Cart() {

  const prod=useSelector(state=>state)
  const dispatch=useDispatch()
  const source=prod.allProducts.cartProduct;
  console.log(localStorage.getItem("lists"));
  // useEffect(() => {

  // }, [])
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
                    dispatch(removeCart(product))
                    alert("Removed Successfully")
                  }}
                >Remove from cart</h2>
              </div>
          </div>
        )}
      </div>
      
    </div>
  )
}
