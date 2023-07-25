import React from 'react'
import Dashboard from './Dashboard';
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className='bg-white flex justify-between p-2 '>
    <h1>Assignment . </h1>
    <main className='mr-2'>
    <Link to='/' className='mr-2'>Login</Link>
    <Link to='/Dashboard' className='mr-2'>Dashboard</Link>
 
   </main>
   </nav>
  )
}

export default Navbar