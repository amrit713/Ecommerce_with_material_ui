import React from 'react'

function InfoDetail() {
  return (
    <div
            className="flex items-center justify-center space-x-4 bg-white rounded-md px-8 py-6 cursor-pointer hover:shadow-lg duration-500 ease-in-out"
          
          >
            {info.icon}
            <div className="">
              <Typography className="font-semibold">{info.title}</Typography>
              <Typography className="text-gray-500">{info.subTitle}</Typography>
            </div>
          </div>
  )
}

export default InfoDetail