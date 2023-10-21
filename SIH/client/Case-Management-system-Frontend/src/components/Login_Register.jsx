import React from 'react'
import {Link} from "react-router-dom"
function Login_Register() {
  return (
    <>
        <div className='h-screen m-2 border-2 border-gray-400 flex justify-center items-center gap-x-6'>
              <Link to="/Login" className='z-50 hover:scale-110 transition ease-in-out delay-120 border-2 border-black p-2 font-semibold text-3xl'>LOGIN</Link>
              <Link to="/Register" className='z-50 hover:scale-110 transition ease-in-out delay-120 border-2 border-black p-2 font-semibold text-3xl'>SignUp</Link>
        </div>

    </>
  )
}

export default Login_Register
