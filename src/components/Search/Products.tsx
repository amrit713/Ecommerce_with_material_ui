import React from 'react'
import Product from '../home/product/Product'
import { Pagination } from '@mui/material'

function Products() {
  return (
    <div className='md:w-[75%]'>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:grid-cols-3 xl:grid-cols-4">
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
      <div className="flex justify-center mt-8">
        <Pagination count={10} variant="outlined" shape="rounded"/>

      </div>
    </div>
  )
}

export default Products