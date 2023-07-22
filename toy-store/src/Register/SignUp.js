import React, { useState } from 'react'
import "./SignUp.css"
import {Link} from "react-router-dom"
import axios from 'axios'

export default function SignUp() {

	const [email,setEmail]=useState("");
	const [pass,setPass]=useState("");
	const [names,setName]=useState("");

	const submitHandler = (e) =>{
		e.preventDefault();
		axios.post("http://localhost:8080/api/v1/auth/register",{
			name:names,
			email:email,
			password:pass
		}).then((res)=>{
			console.log(res.data.token);
			alert("Successfull Registration")
		}).catch((error) => {
			console.log("Error occured while submitting request")
		})

	}

	
  return (
    <div>
      <div className="sign-up">
		<form id='signupform' onSubmit={submitHandler}>
			<h1 id='signuph1'><span id='c'>C</span>reate  <span id='a'>A</span>ccount</h1>
			<input type="text" placeholder="Name" value={names} 
			onChange={(e)=>{setName(e.target.value)}} 
			required />
			<input type="email" value={email} 
			onChange={(e)=>{setEmail(e.target.value)}} 
			placeholder="Email" required pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$"/>
			{/* <input type="number" placeholder="Mobile Number" required/>
			<input type="number" placeholder="Age" required/> */}
			<input type="password" value={pass}
			onChange={(e)=>{setPass(e.target.value)}}
			placeholder="Password" required pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" />
			<button type="submit" id="btn">Sign Up</button>
			<div id="com2">
            	Already a User?<Link to="/login">SignIn</Link>
			</div>
		</form>

	    </div>
        
    </div>
  )
}
