import React, { useState } from 'react'
import "./SignUp.css"
import {Link, useNavigate} from "react-router-dom"
import axios from 'axios'
import { useDispatch } from 'react-redux';
import { login } from '../Redux/actions/action';

export default function SignUp() {
	const navigate=useNavigate();

	const [email,setEmail]=useState("");
	const [pass,setPass]=useState("");
	const [names,setName]=useState("");


	const [customerLogin,setCustomerLogin]=useState(
		{
		email:"",
		password:""
	}
	)

	const signupHandler = (e) =>{
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

	const handleLogin=(e)=>{
		e.preventDefault();
		axios.post("http://localhost:8080/api/v1/auth/authenticate",{
			email:customerLogin.email,
			password:customerLogin.password
		}).then((res)=>{
			const token=res.data.token;
			console.log(token)
			alert("Successfully signed in")
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
    <div className='registers'>
      {/* <div className="sign-up">
		<form id='signupform' onSubmit={submitHandler}>
			<h1 id='signuph1'><span id='c'>C</span>reate  <span id='a'>A</span>ccount</h1>
			<input type="text" placeholder="Name" value={names} 
			onChange={(e)=>{setName(e.target.value)}} 
			required />
			<input type="email" value={email} 
			onChange={(e)=>{setEmail(e.target.value)}} 
			placeholder="Email" required pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$"/>
			<input type="password" value={pass}
			onChange={(e)=>{setPass(e.target.value)}}
			placeholder="Password" required pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" />
			<button type="submit" id="btn">Sign Up</button>
			<div id="com2">
            	Already a User?<Link to="/login">SignIn</Link>
			</div>̀
		</form>

	    </div> */}

			<div className="main">  	
				<input type="checkbox" id="chk" aria-hidden="true"/>
					<div class="signup">
						<form onSubmit={signupHandler}>
							<label for="chk" aria-hidden="true">Sign up</label>
							<input type="text" name="txt" placeholder="User name" onChange={(e)=>{setName(e.target.value)}}  required=""/>
							<input type="email" name="email" onChange={(e)=>{setEmail(e.target.value)}} 
			placeholder="Email" required pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$" />
							<input type="password" name="pswd" placeholder="Password" onChange={(e)=>{setPass(e.target.value)}}
								 required pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" />
							<button>Sign up</button>
						</form>
					</div>

					<div class="login">
						<form onSubmit={handleLogin}>
							<label for="chk" aria-hidden="true">Login</label>
							<input type="email" placeholder="Email"
							 onChange={(e)=>{
								setCustomerLogin({
									...customerLogin,email:e.target.value
								})}} pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$" required/>
							<input type="password" name="pswd" placeholder="Password" 
							onChange={(e)=>{
								setCustomerLogin({
									...customerLogin,password:e.target.value
								})}} pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" required/>
							<button>Login</button>
						</form>
					</div>
			</div>
        
    </div>
  )
}
