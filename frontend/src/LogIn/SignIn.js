import React, { useState } from 'react'
import "./SignIn.css"
import {Link, useNavigate} from "react-router-dom"
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { login } from '../Redux/actions/action';




export default function SignIn() {
	const navigate=useNavigate();
	const dispatch=useDispatch();

	const [customerLogin,setCustomerLogin]=useState(
		{
		name:"",
		email:"",
		password:""
	}
	)

	const handleLogin=(e)=>{
		e.preventDefault();
		axios.post("http://localhost:8080/api/v1/auth/authenticate",{
			email:customerLogin.email,
			password:customerLogin.password
		}).then((res)=>{
			const token=res.data.token;
			console.log(token)
			alert("Successfully signed in")
			dispatch(login(customerLogin.name))
			navigate("/dashboard")
		})
		.catch((e)=>
		{
			console.log("Incorrect email/password")
			alert("Incorrect email/password")
		}
		)

	}
  return (
    <div>
      <div className="sign-in">
		<ToastContainer/>
		<form id='loginform' action="#" onSubmit={handleLogin}>
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
			}} pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$" required />
			<input type="password" placeholder="Password" onChange={(e)=>{
				setCustomerLogin({
					...customerLogin,
					password:e.target.value
				})
			}} pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" required/>

			<button type="submit" id="btn">Sign In</button>

			<div className='com1'>
				Not a User?<Link to="/signup">SignUp</Link>
			</div>
		</form>
	</div>
    </div>
  )
}
