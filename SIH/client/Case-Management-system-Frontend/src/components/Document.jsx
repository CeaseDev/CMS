import React from 'react'
import {Link} from "react-router-dom"
 

function Document() {
  return (
    <>
      <div className="opacity-80 -z-10 p-2 bg-[url('https://images.pexels.com/photos/8369526/pexels-photo-8369526.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-cover">
        <div className='h-screen m-2 border-2 border-gray-400 flex justify-center items-center gap-x-6'>
              <Link to="/Upload" className='z-50 hover:scale-110 transition ease-in-out delay-120 border-2 border-black p-2 font-semibold text-3xl'>UPLOAD</Link>
              <Link to="/Access" className='z-50 hover:scale-110 transition ease-in-out delay-120 border-2 border-black p-2 font-semibold text-3xl'>ACCESS</Link>
        </div>
      </div>
    </>
  )
}

export default Document
