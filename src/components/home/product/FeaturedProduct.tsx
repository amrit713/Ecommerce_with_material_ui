import { Button, Typography } from '@mui/material'
import React from 'react'
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

import Product from './Product'

function FeaturedProduct() {
  return (

    <div className="">

      <div className="flex items-center justify-between">
      <Typography variant='h5' className='capitalize font-bold mb-4 '>Featured Products</Typography>
      <Button className='text-gray-500 font-semibold hover:text-primary-main duration-200 ease-in-out'>View All  <ArrowRightAltIcon className=" text-[24px] space-x-2 " /></Button>
      </div>
        

    <div className=' w-full flex space-x-5 overflow-x-auto'>
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        

        </div>
    </div>
  )
}

export default FeaturedProduct