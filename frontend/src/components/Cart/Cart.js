import React, { useState,useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import NavBar from '../../Nav/Navbar';
import { cartProducts, removeCart } from '../../Redux/actions/action';
import "../Shop/Shop.css"
import home10 from '../../assets/addtocart.gif'
import Footer from '../../Footer/Footer';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

export default function Cart() {
  const notify=()=>toast.success("Removed from Cart");
  const prod=useSelector(state=>state)
  const dispatch=useDispatch()
  // const source=prod.allProducts.cartProduct;
  const[source,setSource]=useState([]);
   
  const[total,setTotal]=useState(0);
  


  useEffect(() => {
    setSource(JSON.parse(localStorage.getItem("items")));
  }, [])
  
  useEffect(()=>{
    source.map((product)=>
    setTotal(total=>total+product.dprice))
  },[source])
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
        <NavBar source={source}/>
       {
         source.length==0?
         <img src={home10} style={{transform:"translateX(65%)"}}></img>:""
        }
      {/* <div> */}
      <ToastContainer/>
      <div className='products'>

    
        {source.map((product)=>
          <div className='product' key={product.pid}>
              <img src={product.link} className='image'></img>
              <p>{product.des}</p>
              <div className='prices'>
                  <p id='price'> ₹{product.price}</p>
                  <p id='dprice'> ₹{product.dprice}</p>
                  <p id='dprice'> (Save{product.save}%)</p>
                  {/* <input type={number}></input> */}
                </div>
              <div className='btns'>
                <h2 className='btnshop' 
                  onClick={()=>{
                    // alert("Removed from Cart")
                    notify();
                    remove(product.id)
                    
                  }}
                >Remove from cart</h2>
              </div>
          </div>
        )}
      </div>
        <div className='cartprice'>
          <h1>
            
            Total Price:{total}
            </h1>
        </div>
        {/* </div> */}
      {/* <Footer/> */}
    </div>
  )
}

