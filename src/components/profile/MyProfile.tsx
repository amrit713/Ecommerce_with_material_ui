import React from 'react'
import EmailIcon from "@mui/icons-material/Email";
import { Avatar, Typography } from '@mui/material';
import ProfileItem from './ProfileItem';

function MyProfile() {
  return (
    <div>
        <div className="bg-white p-4  mt-8 rounded-md box_shadow flex items-center justify-between">
          <div className="flex items-center space-x-4"> 
            <Avatar
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
              className="w-[7rem] h-[7rem]"
            />
            <div className="">
              <Typography variant="h6" className="font-semibold">
                John Wick
              </Typography>

              <div className="flex items-center space-x-2 text-gray-600 ">
                <EmailIcon className="text-sm" />
                <Typography variant="body1" className="text-sm ">
                  {" "}
                  jhonwich@gmail.com
                </Typography>
              </div>
            </div>
          </div>

          <Typography variant="h6" className="font-medium uppercase text-gray-400" >customer</Typography>

        </div>

        <div className="grid mt-8 grid-cols-1  gap-6 md:grid-cols-2 lg:grid-cols-4">
           <ProfileItem count ={18} title="all order" />
           <ProfileItem count ={4} title="awaiting payments" />
           <ProfileItem count ={0} title="awaiting shipment" />
           <ProfileItem count ={6} title="aawaiting delivery" />
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 bg-white p-4  mt-8 rounded-md box_shadow">
            <div className='border-solid border p-2 text-center rounded-md border-gray-200'>
                <Typography   className='text-gray-600 text-sm'> First Name</Typography>
                <Typography  className='font-medium' > John</Typography>
            </div>

            <div className='border-solid border p-2 text-center rounded-md border-gray-200'>
                <Typography   className='text-gray-600 text-sm'> Last Name</Typography>
                <Typography  className='font-medium' > Wich</Typography>
            </div>

            <div className='border-solid border p-2 text-center rounded-md border-gray-200'>
                <Typography   className='text-gray-600 text-sm'> Email</Typography>
                <Typography  className='font-medium' > Johnwick@gmail.com</Typography>
            </div>

            <div className='border-solid border p-2 text-center rounded-md border-gray-200'>
                <Typography   className='text-gray-600 text-sm'> Phone</Typography>
                <Typography  className='font-medium' > +977 9812345670</Typography>
            </div>

        </div>
    </div>
  )
}

export default MyProfile