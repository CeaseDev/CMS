import React, {useState } from 'react' ; 
import {EyeInvisibleOutlined, EyeOutlined} from "@ant-design/icons";

function Register() {
  const [user , setUser] = useState({
    UID : '',  
    fname : '' , 
    lname : '' , 
    email : '',
    mobile : '', 
    password : '',
    retype : '', 
    isMatched : true 
  })


  const handleSubmit = (e) => {
    e.preventDefault() ; 
  }

  const changeConfirmPasswordHandler = (e) =>{
    setUser( {retype : e.target.value}) ; 
  }

  const changePasswordHandler = (e) =>{
    setUser( {password : e.target.value}) ; 
    const {password , retype } = user ; 
    console.log(password) ; 
    console.log(retype ) ; 
    const match = password === retype ; 
    setUser( {isMatched : match }) ; 
  }


  const handleInput = (e) => {
    const { name, value } = e.target;
    setUser( (prevData) =>{
      return {  
        ...prevData,
        [name]: value
        }
      }  ) ; 
    }

     const [visible,setVisible ] = useState(false);
     const [visible1,setVisible1 ] = useState(false);


  return (
    <>
        <form className='m-3' onSubmit={handleSubmit}>
        <div className="space-y-12">
          <div className="border-b border-gray-900/10 pb-2">

            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <h1 className='text-3xl text-left'>Personal Information</h1>
            </div>
          </div>
          <div className="border-b border-gray-900/10 pb-6">
            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <label htmlFor="fname" className="block text-sm font-medium leading-6 text-gray-900">First name</label>
                <div className="mt-2">
                  <input type="text" name="fname" value={user.fname} onChange={handleInput} id="fname" autoComplete="given-name" className="block pl-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label htmlFor="lname" className="block text-sm font-medium leading-6 text-gray-900">Last name</label>
                <div className="mt-2">
                  <input type="text" name="lname" value={user.lname} onChange={handleInput} id="lname" autoComplete="family-name" className="block pl-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Email address</label>
                <div className="mt-2">
                  <input id="email" name="email" value={user.email} onChange={handleInput} type="email" autoComplete="email" className="block pl-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label htmlFor="phone" className="block text-sm font-medium leading-6 text-gray-900">Phone</label>
                <div className="mt-2">
                  <input type="text" name="phone" value={user.phone} onChange={handleInput} pattern='[6789][0-9]{9}' title='Please enter valid phone number' id="phone" className="block pl-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label htmlFor="UID" className="block text-sm font-medium leading-6 text-gray-900">AADHAAR</label>
                <div className="mt-2">
                  <input type="text" name="UID" value={user.UID} onChange={handleInput} pattern='[0-9]{12}' title='Please enter valid AADHAAR number' id="UID" className="block pl-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                </div>
              </div>
            </div>

          </div>
          <div className="border-b border-gray-900/10 pb-2">
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">Password</label>
                <div className="flex mt-2">
                
                  <input name="password" placeholder="Password" value={user.password}
                   onChange={changePasswordHandler}  pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" 
                   title="Must contain at least one  number and one uppercase and lowercase letter, and at least 8 or more characters"
                   id="password" className="block pl-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" 
                   type = {visible ? "text": "password"}/>

                   <div className = 'p-2' onClick = {() => setVisible(!visible)}>
                    {visible ? <EyeOutlined /> : <EyeInvisibleOutlined />}
                   </div>
                   
                </div>
                
            </div>

            <div className="grid-column-start: 1 sm:col-span-3">
                <label htmlFor="retype" className="block text-sm font-medium leading-6 text-gray-900">Confirm Password</label>
                <div className="flex mt-2">
                
                  <input name="retype" placeholder="Confirm Password" value={user.retype}
                   onChange={changeConfirmPasswordHandler}  
                   id="pass" className="block pl-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" 
                   type = {visible1 ? "text": "password"}/>

                   <div className = 'p-2' onClick = {() => setVisible1(!visible1)}>
                   {!user.isMatched && (
                        <p style={{ color: 'red' }}>Passwords do not match.</p>
                    )}
                    {visible1 ? <EyeOutlined /> : <EyeInvisibleOutlined />}
                   </div>
                   
                </div>
                
            </div>

          </div>
          </div>
          <div className="mt-6 flex items-center justify-center gap-x-6">
                <button type="button" className="text-sm font-semibold leading-6 text-gray-900">Cancel</button>
                <button type="submit" className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign Up</button>
          </div>
        </div>
      </form> 
    </>
  )
}

export default Register