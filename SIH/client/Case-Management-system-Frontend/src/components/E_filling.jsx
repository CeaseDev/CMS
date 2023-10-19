import React, { useEffect, useState } from 'react' ; 
import axios from 'axios' ; 

function E_filling() {

  const [formData, setformData] = useState({
    fname: '',
    lname: '',
    email: '',
    postalcode: '',
    address: '',
    city: '',
    region: '',
    phone: '',
    desc: '',
    resfname: '',
    reslname: '',
    resemail: '',
    respostalcode: '',
    resaddress: '',
    rescity: '',
    resregion: '',
    resphone: '',
  });

  const [caseNumber , setCaseNumber ] = useState('') ;

  const handleSubmit =  async (e) => {
    e.preventDefault();
    try {
      // Send a POST request to the server
      const token = localStorage.getItem('token') ; 
      if(token){
        // const req = { token , formData }
        const response = await axios.post('http://localhost:4000/api/v1/Efile', formData );
        console.log('Response from server:', response.data.data); 
        setCaseNumber(response.data.data.caseNumber) ; 
        alert('Form Submitted');
      }
      else{
        response = null ; 
      }
      // Handle the response, e.g., show a success message to the user
    } catch (error) {
      // Handle errors, e.g., show an error message to the user
      console.error('Error:', error);
    }
  };


  const handleInput = (e) => {
    const { name, value } = e.target;
    setformData( (prevData) =>{
      return {  
        ...prevData,
        [name]: value
        }
      }  ) ; 
    }


  return (
    <>
      <form className='m-3' onSubmit={handleSubmit}>
        <div className="space-y-12">
          <div className="border-b border-gray-900/10 pb-2">

            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <h1 className='text-3xl text-center'>Claimant</h1>
            </div>
          </div>
          <div className="border-b border-gray-900/10 pb-6">
            <h2 className="text-base font-semibold leading-7 text-gray-900">Personal Information</h2>
            <p className="mt-1 text-sm leading-6 text-gray-600">Use a permanent address where you can receive mail.</p>

            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <label htmlFor="fname" className="block text-sm font-medium leading-6 text-gray-900">First name</label>
                <div className="mt-2">
                  <input type="text" name="fname" value={formData.fname} onChange={handleInput} id="fname" autoComplete="given-name" className="block pl-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label htmlFor="lname" className="block text-sm font-medium leading-6 text-gray-900">Last name</label>
                <div className="mt-2">
                  <input type="text" name="lname" value={formData.lname} onChange={handleInput} id="lname" autoComplete="family-name" className="block pl-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                </div>
              </div>

              <div className="sm:col-span-4">
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Email address</label>
                <div className="mt-2">
                  <input id="email" name="email" value={formData.email} onChange={handleInput} type="email" autoComplete="email" className="block pl-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="phone" className="block text-sm font-medium leading-6 text-gray-900">Phone</label>
                <div className="mt-2">
                  <input type="text" name="phone" value={formData.phone} onChange={handleInput} pattern='[6789][0-9]{9}' title='Please enter valid phone number' id="phone" autoComplete="postal-code" className="block pl-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                </div>
              </div>

              <div className="col-span-full">
                <label htmlFor="address" className="block text-sm font-medium leading-6 text-gray-900">Address</label>
                <div className="mt-2">
                  <input type="text" name="address" value={formData.address} onChange={handleInput} id="address" autoComplete="address" className="block pl-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                </div>
              </div>

              <div className="sm:col-span-2 sm:col-start-1">
                <label htmlFor="city" className="block text-sm font-medium leading-6 text-gray-900">City</label>
                <div className="mt-2">
                  <input type="text" name="city" value={formData.city} onChange={handleInput} id="city" autoComplete="address-level2" className="block pl-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="region" className="block text-sm font-medium leading-6 text-gray-900">State / Province</label>
                <div className="mt-2">
                  <input type="text" name="region" value={formData.region} onChange={handleInput} id="region" autoComplete="address-level1" className="block pl-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                </div>
              </div>
              

              <div className="sm:col-span-2">
                <label htmlFor="postalcode" className="block text-sm font-medium leading-6 text-gray-900">ZIP / Postal code</label>
                <div className="mt-2">
                  <input type="text" name="postalcode" value={formData.postalcode} onChange={handleInput} id="postal-code" autoComplete="postal-code" className="block pl-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                </div>
              </div>


               
              <div className="sm:col-span-2">
                <label htmlFor="desc" className="block text-sm font-medium leading-6 text-gray-900">Case Description</label>
                <div className="mt-2">
                  <textarea placeholder='Write your complaint' onChange={handleInput} name="desc" id="desc" cols="150" rows="10" className="block pl-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></textarea>
                </div>
              </div>



            </div>
          </div>
        </div>

        <div className="space-y-12">
          <div className="border-b border-gray-900/10 pb-2">

            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <h1 className='text-3xl text-center'>Respondant</h1>
            </div>
          </div>
          <div className="border-b border-gray-900/10 pb-6">
            <h2 className="text-base font-semibold leading-7 text-gray-900">Personal Information</h2>
            <p className="mt-1 text-sm leading-6 text-gray-600">Use a permanent address where you can receive mail.</p>

            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <label htmlFor="resfname" className="block text-sm font-medium leading-6 text-gray-900">First name</label>
                <div className="mt-2">
                  <input type="text" name="resfname" value={formData.resfname} onChange={handleInput} id="resfname" autoComplete="given-name" className="block pl-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label htmlFor="reslname" className="block text-sm font-medium leading-6 text-gray-900">Last name</label>
                <div className="mt-2">
                  <input type="text" name="reslname" value={formData.reslname} onChange={handleInput} id="reslname" autoComplete="family-name" className="block pl-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                </div>
              </div>

              <div className="sm:col-span-4">
                <label htmlFor="resemail" className="block text-sm font-medium leading-6 text-gray-900">Email address</label>
                <div className="mt-2">
                  <input id="resemail" name="resemail" value={formData.resemail} onChange={handleInput} type="resemail" autoComplete="email" className="block pl-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="resphone" className="block text-sm font-medium leading-6 text-gray-900">Phone</label>
                <div className="mt-2">
                  <input type="text" name="resphone" value={formData.resphone} onChange={handleInput} pattern='[6789][0-9]{9}' title='Please enter valid phone number' id="resphone" autoComplete="postal-code" className="block pl-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                </div>
              </div>

              <div className="col-span-full">
                <label htmlFor="resaddress" className="block text-sm font-medium leading-6 text-gray-900">Address</label>
                <div className="mt-2">
                  <input type="text" name="resaddress" value={formData.resaddress} onChange={handleInput} id="resaddress" autoComplete="address" className="block pl-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                </div>
              </div>

              <div className="sm:col-span-2 sm:col-start-1">
                <label htmlFor="rescity" className="block text-sm font-medium leading-6 text-gray-900">City</label>
                <div className="mt-2">
                  <input type="text" name="rescity" value={formData.rescity} onChange={handleInput} id="rescity" autoComplete="address-level2" className="block pl-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="resregion" className="block text-sm font-medium leading-6 text-gray-900">State / Province</label>
                <div className="mt-2">
                  <input type="text" name="resregion" value={formData.resregion} onChange={handleInput} id="resregion" autoComplete="address-level1" className="block pl-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                </div>
              </div>
              

              <div className="sm:col-span-2">
                <label htmlFor="respostalcode" className="block text-sm font-medium leading-6 text-gray-900">ZIP / Postal code</label>
                <div className="mt-2">
                  <input type="text" name="respostalcode" value={formData.respostalcode} onChange={handleInput} id="respostal-code" autoComplete="postal-code" className="block pl-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                </div>
              </div>


               
              <div className="sm:col-span-2">
                <label htmlFor="resdesc" className="block text-sm font-medium leading-6 text-gray-900">Case Description</label>
                <div className="mt-2">
                  <textarea placeholder='Write your complaint' value={formData.resdesc} onChange={handleInput} name="Write Here" id="resdesc" cols="150" rows="10" className="block pl-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></textarea>
                </div>
              </div>

            </div>
            <div className="mt-6 flex items-center justify-end gap-x-6">
          <button type="button" className="text-sm font-semibold leading-6 text-gray-900">Cancel</button>
          <button type="submit" className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Save</button>
        </div>
          </div>
        </div>
      </form>

      {caseNumber && <DispCaseNo caseNumber={caseNumber} />}
    </>

  )
}

function DispCaseNo({ caseNumber }) {
  if (!caseNumber) {
    return null; // Don't render anything if caseNumber is not available
  }
  console.log(caseNumber) ; 
  return (
    <div className="flex justify-center items-center ">
      <div>Case Number</div>
      <div>Please Note this Case Number For Future Reference {caseNumber}</div>
    </div>
  );
  }


export default E_filling 
