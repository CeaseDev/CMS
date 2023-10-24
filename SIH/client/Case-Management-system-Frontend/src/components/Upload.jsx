import React, { useState } from 'react'
import {
  Card,
  Input,
  Button,
  Typography,
  Progress,
} from "@material-tailwind/react";
import axios from 'axios';

import False_Evidence from "./False_Evidence"

function Upload() {

  const [caseNo , setCaseNo ] = useState("") ; 
  const [File , setFile] = useState(null) ;
  const [uploadProgress, setUploadProgress] = useState(0);


  const fileChangeHandler = (e) =>{
    console.log(File) ; 
    setFile(e.target.files[0]) ; 
  }

  const changeHandler = (e) => {
      console.log(caseNo) ; 
      setCaseNo(e.target.value) ;
  }

  const submitHandler = (e) =>{
    e.preventDefault() ; 
    const url = 'http://localhost:4000/api/v1//document/upload';
    const formData = new FormData();
    formData.append('file', File);
    formData.append('caseNo', caseNo);
    const config = {
      headers: {
        'content-type': 'multipart/form-data',
      },
      onUploadProgress: function(progressEvent) {
        const percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
        setUploadProgress(percentCompleted);
      }
    } ;

    axios.post(url, formData, config).then((response) => {
      console.log(response.data);
    }); 
  }

  return (
    <>

    <div className='flex justify-center border-b-2 border-gray-200 m-2'>
    <Card color="transparent" shadow={false}>
      <Typography variant="h4" color="blue-gray" className='text-center'>
         Attach the Required File
      </Typography>
      <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96" onSubmit={submitHandler}>
      <div className="mb-4 flex flex-col gap-6">
          <Input type="text" size="lg" label="Case Number" onChange={changeHandler} value ={caseNo}/>
        </div>
        <div className="mb-4 flex flex-col gap-6">
          <Input type="file" size="lg" label="File" onChange={fileChangeHandler} />
        </div>
        <Button type = "submit" className="mt-6" fullWidth>
          Upload
        </Button>
        <br></br>
        <br></br>
        <Progress value={uploadProgress } />
      </form>
    </Card>
    </div>

    <div className='p-2'>
    <Typography className='font-semibold text-2xl text-center'>Recognition of false evidence under IPC and possible consequences it holds</Typography>
    <False_Evidence/>
    </div>
         
    </>
  )
}

export default Upload
