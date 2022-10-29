import { Button,Typography } from '@mui/material'
import React from 'react'
import Address from './Address'

function Checkout() {
  return (
    <div className=' mt-24 flex flex-col-reverse md:flex-row md:space-x-8 md:space-y-0'>
        <div className="md:w-[75%] space-y-6">
          <Address/>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 ">
          <Button variant='outlined' className='capitalize'>Back To Cart </Button>
          <Button variant='contained' className='capitalize'> proceed to payment</Button>
          </div>
          
        </div>
        <div  className=" md:w-[25%] max-h-[27vh] border-solid border-2 shadow-sm border-gray-100 rounded-md bg-white p-4 space-y-4 mb-8">
        <div className="flex items-center justify-between">
          <Typography variant="subtitle1" className="capitalize text-dark">
            subtotal:
          </Typography>
          <Typography className="capitalize font-semibold">
            {" "}
            rs.40,000.00
          </Typography>
        </div>

        <div className="flex items-center justify-between">
          <Typography variant="subtitle1" className="capitalize text-dark">
            shipping:
          </Typography>
          <Typography className="capitalize font-semibold">
            {" "}
            rs.200.00
          </Typography>
        </div>

        <div className="flex items-center justify-between">
          <Typography variant="subtitle1" className="capitalize text-dark">
            VAT:
          </Typography>
          <Typography className="capitalize font-semibold">
            {" "}
            rs.2000.00
          </Typography>
        </div>

        <div className="flex items-center justify-between">
          <Typography variant="subtitle1" className="capitalize text-dark">
            discount:
          </Typography>
          <Typography className="capitalize font-semibold">
            {" "}
            00.00
          </Typography>
        </div>
        <div className="border-solid border rounded-sm  border-gray-100 " />

        <Typography variant='h6' className="text-right font-semibold">Rs.42,200.00</Typography>
        </div>
    </div>
  )
}

export default Checkout