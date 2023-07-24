import React from 'react'
import { useSelector } from 'react-redux'
import Home from '../../HomePage/Home';
import NavBar from '../../Nav/Navbar';

export default function Dashboard() {
  const prod=useSelector(state=>state)
  const name=prod.allProducts.names;
  return (
    <div>
      {name}'s HomePage
      <Home/>

    </div>
  )
}
