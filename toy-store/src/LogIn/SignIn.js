import React, { useState } from 'react'
import "./SignIn.css"
import {Link, useNavigate} from "react-router-dom"




export default function SignIn() {
	const navigate=useNavigate();

	const [customerLogin,setCustomerLogin]=useState(
		{email:"",
		password:"",
		name:""
	}
	)

	const handleLogin=(e)=>{
		e.preventDefault();
		
	}
  return (
    <div>
      <div className="sign-in">
		<form id='loginform' action="#">
			<h1 id='loginh1'><span id='s'>S</span>ign <span id='i'>i</span>n</h1>
			<input type="text" placeholder='Name' onChange={(e)=>{
				setCustomerLogin({
					...customerLogin,
					name:e.target.value
				})
			}} required/>
			<input type="email" placeholder="Email" onChange={(e)=>{
				setCustomerLogin({
					...customerLogin,
					email:e.target.value
				})
			}} required />
			<input type="password" placeholder="Password" onChange={(e)=>{
				setCustomerLogin({
					...customerLogin,
					password:e.target.value
				})
			}} pattern="^(?=.\d)(?=.[a-z])(?=.[A-Z])(?=.[!@#$%^&*]).{8,}$" required/>

			<button type="submit" id="btn" onClick={handleLogin}>Sign In</button>

			<div className='com1'>
				Not a User?<Link to="/signup">SignUp</Link>
			</div>
		</form>
	</div>
    </div>
  )
}
