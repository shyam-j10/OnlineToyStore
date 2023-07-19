import React from 'react'
import "./SignUp.css"
import {Link} from "react-router-dom"

export default function SignUp() {
  return (
    <div>
      <div className="sign-up">
		<form id='signupform' action="#">
			<h1 id='signuph1'><span id='c'>C</span>reate  <span id='a'>A</span>ccount</h1>
			<input type="text" placeholder="Name" required />
			<input type="email" placeholder="Email" required/>
			<input type="number" placeholder="Mobile Number" required/>
			<input type="number" placeholder="Age" required/>
			<input type="password" placeholder="Password" required />
			<button type="submit" id="btn">Sign Up</button>
			<div id="com2">
            	Already a User?<Link to="/login">SignIn</Link>
			</div>
		</form>

	    </div>
        
    </div>
  )
}
