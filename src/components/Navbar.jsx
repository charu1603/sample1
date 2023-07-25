import React from 'react'

import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className='bg-yellow-200 flex justify-between p-2 text-black'>
    <h1>Assignment . </h1>
    <main className='mr-2'>

    <Link to='/' className='mr-4'>Login</Link>
    <Link to='/Dashboard' className='mr-2'>Dashboard</Link>
 
   </main>
   </nav>
  )
}

export default Navbar