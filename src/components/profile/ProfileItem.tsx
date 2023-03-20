import { Typography } from '@mui/material'
import React from 'react'
interface IProps{
    count:number;
    title:string;
}

function ProfileItem(props:IProps) {
  return (
    <div className='bg-white p-4 box_shadow rounded-md text-center'>
        <Typography variant='h5' className='font-semibold text-primary-main'>{props.count}</Typography>
        <Typography variant='subtitle1' className='text-gray-500 text-sm capitalize'>{props.title}</Typography>
    </div>
  )
}

export default ProfileItem