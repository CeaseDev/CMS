import React from 'react'
import Cn from './Cn'
import Judicial_Process from './Judicial_Process'

function Home() {

  return (
    <>

      {/* Empower image */}

      <div id='empower'>
        <img src="src\assets\empower.jpg" alt="empower" className='w-full' />
      </div>

      {/* latest update div */}
      <div className='w-full flex justify-center border-2 h-16 items-center shadow-lg'>
        <h1 className='text-2xl font-bold'>Latest Updates</h1>
        <div className='bg-sky-700 w-4 h-4 ml-2 border-2 rounded-xl animate-ping border-blue-300'></div>
      </div>

      <div className='flex justify-between'>

        <div className='w-6/12 p-3' id='left'>
          <Cn />
        </div>

        <div id='right' className='border-2 w-6/12 flex justify-center items-center bg-neutral-500'>
          <div className='border-2 h-32 w-64 shadow-md rounded-md p-7'>
            To know more about latest events:
            <br />
            <h1 className='text-center'><a href="https://www.livelaw.in/" target='_blank' className='font-bold text-center'>Click Here</a></h1>
          </div>
        </div>
      </div>


      <div>

        <div className='w-full flex justify-center border-2 h-16 items-center shadow-lg'>
          <h1 className='text-2xl font-bold'>Judicial Processes</h1>
        </div>

        <div className='p-3'>
          <Judicial_Process />
        </div>

      </div>


    </>

  )
}

export default Home
