import React from 'react'
import {Link} from "react-router-dom"


function Header() {
  return (
  <>    
     <div className='flex justify-between border-2 p-2'>
        <div>
          <img src="src\assets\Ministry_of_Law_and_Justice.svg.png" alt="" className='h-24'/>
        </div>
        
        <div className='text-left'>
          <h2 className='uppercase font-bold text-2xl'>E-Portal for Case Management</h2>

        </div>

        <div className='flex justify-between'>
          <h2 className='ml-3 font-bold underline'>ENGLISH</h2>
        </div>

     </div>


     <div className='shadow-xl h-10 flex justify-between p-3 w-full bg-neutral items-center mb-2'>

            <Link to="/" className='hover:text-red-900 hover:scale-110 transition ease-in-out delay-150 font-bold'>HOME</Link>
            <Link to="/E_Filling" className='hover:text-red-900 hover:scale-110 transition ease-in-out delay-150 font-bold'>E-FILLING</Link>
            <Link to="/Document" className='hover:text-red-900 hover:scale-110 transition ease-in-out delay-150 font-bold'>DOCUMENTS</Link>
            <Link to="/" className='hover:text-red-900 hover:scale-110 transition ease-in-out delay-150 font-bold'>CASE MANAGEMENT</Link>
            <Link to="/" className='hover:text-red-900 hover:scale-110 transition ease-in-out delay-150 font-bold'>PRE TRIAL CONFERENCE</Link>
            <Link to="/Login_Register" className='hover:text-red-900 hover:scale-110 transition ease-in-out delay-150 font-bold'>LOGIN/REGISTER</Link>
            {/* <Link to="/" className='hover:text-red-900 hover:scale-110 transition ease-in-out delay-150 font-bold'>CONTACT US</Link>
            <Link to="/" className='hover:text-red-900 hover:scale-110 transition ease-in-out delay-150 font-bold'>FEEDBACK</Link> */}

     </div>
  
  </>
  )
}

export default Header
