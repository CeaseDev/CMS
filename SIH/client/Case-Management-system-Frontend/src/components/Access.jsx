import React from 'react'
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";

function Access() {
  return (
    <>
    <div className='flex justify-center border-b-2 border-gray-200 m-2'>
    <Card color="transparent" shadow={false}>
      <Typography variant="h4" color="blue-gray">
        Enter Details
      </Typography>

      <form className="mt-5 mb-2 w-80 max-w-screen-lg sm:w-96">
        <div className="mb-4 flex flex-col gap-6">
          <Input size="lg" label="Enter the Case Number" />
        </div>
        <Button className="mt-6" fullWidth>
          Access
        </Button>
      </form>
    </Card>
    </div>

    <div className='h-screen border-2 border-gray-300 m-2 p-2'>
      Display the Docs Here
    </div>

      
    </>
  )
}

export default Access
