import React from 'react'
import {
  Card,
  Input,
  Button,
  Typography,
} from "@material-tailwind/react";

import False_Evidence from "./False_Evidence"

function Upload() {
  return (
    <>

    <div className='flex justify-center border-b-2 border-gray-200 m-2'>
    <Card color="transparent" shadow={false}>
      <Typography variant="h4" color="blue-gray" className='text-center'>
         Attach the Required File
      </Typography>
      <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
        <div className="mb-4 flex flex-col gap-6">
          <Input type="file" size="lg" label="File" />

        </div>
        <Button className="mt-6" fullWidth>
          Upload
        </Button>
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
