import { Button, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import {motion} from "framer-motion"

function pageNotFound() {
  return (
    <motion.div
    initial ={{opacity:0.4, scale:0.9}}
    animate ={{opacity:1, scale:1}}
    transition={{
      duration:".8"
    }}
    className="">
      <div className="relative h-[50vh] max-w-[70%] m-auto mt-32 hover:scale-105 duration-300 ease-in-out cursor-pointer ">
        <Image
          layout="fill"
          alt="page Not found"
          src="/404.svg"
        />
      </div>
      <div className="flex flex-col justify-center items-center gap-4 lg:mt-4">
        <Typography className="text-gray-600 text-sm">
          We suggest you to homepage while we fixing problem
        </Typography>
        <Link href="/">
          <Button variant="contained" className=" py-2  min-w-[400px] ">
            back to home
          </Button>
        </Link>
      </div>
    </motion.div>
  );
}

export default pageNotFound;
