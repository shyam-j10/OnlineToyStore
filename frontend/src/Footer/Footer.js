import React from 'react'
import './Footer.css'

export default function Footer() {
  return (
    <div>
         <footer>
        <div class="container">
            <div class="footer-content">
                {/* <div class="footer-logo">
                    
                     <img src="logo.png" alt="Toy Store Logo"/>  */}
                     <div class="col-sm-12 col-md-6">
            {/* <h2>About</h2> */}
            <p class="text-justify">The first toy store was founded in 1760 by William Hamley in London, under the name of "Noah's Ark", later renamed to Hamleys. Set over seven floors, a Hamleys branch at 200 Regent Street in the West End of London opened in 1881. The famous toy store in New York City, FAO Schwarz, was founded under the name Schwarz Toy Bazaar. It was founded in 1862 by the German immigrant, Frederick August Otto Schwarz. The former largest toy retailer in the United States, Toys "R" Us, started business in 1948 by Charles Lazarus, a veteran of World War II. In 2015, FAO Schwarz closed, and did not reopen until after Toys "R" Us went bankrupt in 2018.There can be a large gender bias for the marketing of certain products. This includes using color to market products to a certain gender, or only showing one gender to market to that specific demographic. On the U.S. Disney Store website, the toys for boys are predominantly red, black, brown, or grey, while the toys for girls are mostly pink or purple. However, the toys meant for both boys and girls were mostly of the same color palette as the toys for boys.</p>
          </div>
                {/* </div> */}
                <div class="footer-links">
                    
                    {/* <a href="#">Home</a> 
                    <a href="#">Products</a> 
                 <a href="#">Contact</a>  */}
                 <h2>Follow Us For More</h2>
                 <input type={'Email'} placeholder='Email' style={{width:'200px',marginTop:'20px',color:'black'}}></input>
                </div>
            </div>
            <div class="footer-info">
                {/* <!-- Add any additional footer information here --> */}
                <p>&copy; 2023 Toy Store. All rights reserved.</p>
            </div>
        </div>
    </footer>
    </div>
  )
}
