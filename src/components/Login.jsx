import React from 'react'
import pic from '../img/Adobe.png';

const Login = () => {
  return (
    <div className='bg-white  w-[100%]  md:flex'>
       
<div className='left w-[100%] lg:w-[50%] flex flex-col justify-center items-center lg:items-left h-screen lg:px-24'>

<h1 className=' text-black text-2xl  font-bold px-12 '>Get Started Now</h1>
<p className='text-[12px] text-gray-400 pb-4 px-12'>Enter your credentials to access your acount</p>
<div className='flex flex-col px-12 '>
<div className="buttons flex ">
<button className='border rounded-md p-2 px-4 mr-4 text-[12px] font-bold text-black'>Login with google</button>
<button className='border rounded-md p-2 px-4 mr-4 text-[12px] font-bold text-black'>Login with facebook</button>

</div>
<div className='flex items-center my-4'>
<hr className='w-36 bg-black'></hr><span className='text-[12px] text-black'>or</span><hr className='w-36 bg-black'></hr></div>
<form>
    <div className="div my-2">
    <h2 className='text-black text-[12px] font-bold pb-2'>Name</h2>
    <input type="text" placeholder="" className='bg-white border rounded-md px-4 w-72'></input>
    </div>
    <div className="div my-2">
    <h2 className='text-black text-[12px] font-bold pb-2'>Email</h2>
    <input type="Email" placeholder="" className='bg-white bg-white border rounded-md px-4 w-72'></input>
    </div>
    <div className="div my-2">
    <h2 className='text-black text-[12px] font-bold pb-2'>Category</h2>
    <input type="dropdown" placeholder="" className='bg-white bg-white border rounded-md px-4 w-72'></input>
    </div>
    <div className="div">
        <div className='flex justify-between'>
    <h2 className='text-black text-[12px] font-bold pb-2'>Password</h2> <h2 className='text-[10px] text-blue-600 pr-8 md:pr-0'>Forgot password?</h2></div>
    <input type="password" placeholder="" className='bg-white border rounded-md px-4 w-72'></input>
    </div>
    <div className="div my-2">
        <div className='flex  items-center'>
    <h2 className='h-3 w-3 border border-black mr-2 rounded-sm'></h2> <h2 className='text-[12px] text-black'>I agree to the <span className='text-blue-600'>terms and privacy</span></h2></div>
    
    </div>

    <button className='bg-green-600 rounded-md w-72 text-white text-[12px] py-1 font-bold'>Login</button>
 <h2 className='text-[12px] my-2 text-black font-bold '>Have an account? Signin</h2>
</form>
</div>
</div>
<div className="right lg:w-[50%] w-[100%] hidden lg:block h-screen bg-red-500">
    <img className='w-full h-full' src={pic}></img>

</div>

       </div>


  )
}

export default Login