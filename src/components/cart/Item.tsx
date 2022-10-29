import React from 'react'
import Image from 'next/image'
import { IconButton, Typography } from '@mui/material'
import AddRoundedIcon from '@mui/icons-material/Add';
import RemoveRoundedIcon from '@mui/icons-material/Remove';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';

function Item() {
  return (
    <div className='bg-white p-2 rounded-md box_shadow flex justify-between items-start'>
        <div className="flex space-x-4 items-center">
        <div className="  relative  w-[6rem] h-[6rem] rounded-md overflow-hidden  ">
                <Image
                  src="https://images.unsplash.com/photo-1524805444758-089113d48a6d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d2F0Y2h8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="">
                <Typography variant='h6' className='capitalize' > rolex watch</Typography>
                <Typography variant='subtitle1' className='text-dark'>Rs.10,000.00 x 1  <span className='text-primary-main font-semibold mx-2'> Rs.10,000.00</span>  </Typography>
                <div className="flex space-x-2 items-center">
                    <IconButton   >
                    <RemoveRoundedIcon/>
                    </IconButton>
                        <Typography variant='h6' >1</Typography>

                        <IconButton  className=' border-primary-dark' >
                    < AddRoundedIcon />
                    </IconButton>

                </div>
              </div>
        </div>

        <IconButton>
        <CloseRoundedIcon/>
        </IconButton>
    </div>
  )
}

export default Item