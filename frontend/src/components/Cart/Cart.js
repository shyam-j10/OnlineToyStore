import React, { useState,useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import NavBar from '../../Nav/Navbar';
import { cartProducts, removeCart } from '../../Redux/actions/action';
import "../Shop/Shop.css"


export default function Cart() {

  const prod=useSelector(state=>state)
  const dispatch=useDispatch()
  // const source=prod.allProducts.cartProduct;
  const[source,setSource]=useState([]);
   

  


  useEffect(() => {
    setSource(JSON.parse(localStorage.getItem("items")));
  }, [])
  console.log(source)
  const remove=(id)=>{

    for(let i=0;i<source.length;i++){
      if(source[i].id === id){
        source.splice(i,1);

        localStorage.setItem("items",JSON.stringify(source));
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
          <div className='product' key={product.pid}>
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
                    alert("Removed from Cart")
                    remove(product.id)
                  }}
                >Remove from cart</h2>
              </div>
          </div>
        )}
      </div>
      
    </div>
  )
}

