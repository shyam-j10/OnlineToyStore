import React, { useContext,useEffect ,useState} from 'react'
import { UserContext } from '../App'
import shop1 from '../assets/shop1.jpg'
import shop2 from '../assets/shop2.webp'
import shop3 from '../assets/shop3.webp'
import shop4 from '../assets/shop4.webp'
import shop5 from '../assets/shop5.webp'
import shop6 from '../assets/shop6.jpeg'
import shop7 from '../assets/shop7.webp'
import shop8 from '../assets/shop8.webp'
import shop9 from '../assets/shop9.jpg'
import "../components/Shop/Shop.css"
import NavBar from '../Nav/Navbar'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { cartProducts, favProducts } from '../Redux/actions/action'

export default function Search() {
    // const source=[
    //   {"id":1,"link":shop1,"category":"Building Kit/Toy","brand":"Lego","age":"3+","desc":"Lego's City Stunt Plane Building Set","price":1140,"dprice":1050},
    //   {"id":2,"link":shop2,"category":"Castle Toy","brand":"Lego/Disney","age":"6+","desc":"Disney's Elsa Castle Building Set","price":1140,"dprice":1050}, 
    //   {"id":3,"link":shop3,"category":"Electric Toys","brand":"Lego","age":"6+","desc":"Lego's City Electric Sports Car","price":960,"dprice":850},
    //   {"id":4,"link":shop4,"category":"Puzzle Toys","brand":"Lego","age":"6+","desc":"Lego's Batman Building Set","price":3050,"dprice":2900},
    //   {"id":5,"link":shop5,"category":"Electric Toys","brand":"HotWheels","age":"6+","desc":"Hotwheels's Mercedes-Benz","price":1700,"dprice":1550},
    //   {"id":6,"link":shop6,"category":"Tower Sets","brand":"White Rabbit","age":"3+","desc":"White Rabbit's Rainbow Tower Set","price":2870,"dprice":2750},
    //   {"id":7,"link":shop7,"category":"Scooter","brand":"Toy R Us","age":"6+","desc":"Toy R us's Multicolor Scooter","price":1650,"dprice":1580},
    //   {"id":8,"link":shop8,"category":"Toy Gun","brand":"Nerf","age":"6+","desc":"Nerf's Elite Blaster Toy Gun","price":2600,"dprice":2550},
    //   {"id":9,"link":shop9,"category":"Toy Gun","brand":"Nerf","age":"6+","desc":"Nerf's ShockWave Toy Gun","price":2850,"dprice":2760}
    //   ]
    const [source,setSource]=useState([]);
    const dispatch=useDispatch();
    
  //   useEffect(() => {
  //     axios.get("http://localhost:8080/api/v1/auth/products")
  //     .then((res)=>{
  //       console.log(res)
  //       setSource(res.data)
  //     })
  // }, [])
    const prod=[];
    const url=window.document.location.href.split("/");
    const name=url[url.length-1].toLowerCase();
    console.log(name);

    const [arr,setArr]=useState();

    const[loading,setLoading]=useState(false);

    useEffect(() => {

      axios.get("http://localhost:8080/api/v1/auth/products")
      .then((res)=>{
        console.log(res)
        setSource(res.data)
      })

        for(let i=0;i<source.length;i++){
            if(source[i].des.toLowerCase().includes(name)){
                prod.push(source[i]);
            }
        }
        setArr(prod)
        setLoading(true);
    }, [source])
    
    console.log(arr)
  return (
    <div>
      <NavBar/>
      <div className='products'>
        {
          loading ? arr.map((items)=>
          <div className='product'>
                  <img src={items.link} className='image'></img>
                  {/* <p>{items.brand}</p> */}
                  <p>{items.des}</p>
                  <div className='prices'>
                    <p id='price'> ₹{items.price}</p>
                    <p id='dprice'> ₹{items.dprice}</p>
                    <p id='dprice'> Save{items.save}%</p>
                  </div>
                  <div className='btns'>
                    <h2 className='btnshop'
                    onClick={()=>{
                      dispatch(favProducts(items))
                      alert("Added to favorite")
                    }}
                    >Add To Wishlist</h2>
                    <h2 className='btnshop'
                     onClick={()=>{
                      dispatch(cartProducts(items))
                      alert("Added to cart")
                    }}
                    >Add To cart</h2>
                  </div>
              </div>
          ): "No"
        }
      </div>
    </div>
  )
}
