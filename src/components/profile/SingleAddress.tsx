import { Typography } from '@mui/material'
import React from 'react'

function SingleAddress({address}:any) {
  return (
    <div className='p-4 bg-white rounded-md'>
        <Typography className='text-slate-800 font-medium'>
        {address.state}, {address.city} {address.postalCode} -{address.street_address} : {address.phoneNo}
        </Typography>
    </div>
  )
}

export default SingleAddress