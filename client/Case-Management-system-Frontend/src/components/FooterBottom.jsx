import React,{useState} from 'react'
import {Typography } from "@material-tailwind/react";

function FooterBottom() {
  
  const [visible, setVisible] = useState(false) 
  
  const toggleVisible = () => { 
    const scrolled = document.documentElement.scrollTop; 
    if (scrolled > 300){ 
      setVisible(true) 
    }  
    else if (scrolled <= 300){ 
      setVisible(false) 
    } 
  }; 
  
  const scrollToTop = () =>{ 
    window.scrollTo({ 
      top: 0,  
      behavior: 'smooth'
    }); 
  }; 
  
  window.addEventListener('scroll', toggleVisible); 
  
  return (
    <>
<footer className="w-full bg-blue-gray-50">
      <div className="flex flex-wrap items-center justify-center bg-black">
        {/* <img src="src\assets\Ministry_of_Law_and_Justice.svg.png" alt="logo-ct" className="w-64 h-20" /> */}
        <ul className="flex flex-wrap items-center gap-y-2 gap-x-8 p-2">
          <li>
            <Typography
              as="a"
              href=""
              color="blue-gray"
              className="font-normal text-white transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              About Us
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href=""
              color="blue-gray"
              className="font-normal text-white transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              Feedback
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href=""
              color="blue-gray"
              className="font-normal text-white transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              Contribute
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href=""
              color="blue-gray" 
              className="font-normal text-white transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              Contact Us
            </Typography>
          </li>
        </ul>
      </div>
      <div className='text-right fixed right-0 bottom-0 m-2'>
      <a href="" className='text-4xl' onClick={scrollToTop}  style={{display: visible ? 'inline' : 'none'}}>⬆️</a>
      </div>
      <hr className="my-8 border-blue-gray-50" />
      <Typography color="blue-gray" className="text-center font-bold">
        &copy; 2023 Ministry of Law and Justice
      </Typography>
    </footer>
    </>
  )
}

export default FooterBottom
