import React from "react";
import { Typography } from "@mui/material";
import { AnimatePresence, motion } from "framer-motion";
interface IProps {
  toggle: boolean;
  description:string
}

function Description(props: IProps) {
  return (
    <AnimatePresence>
      {props.toggle && (
        <motion.div
          className="mt-4"
          initial={{ x:-40 }}
          animate={{ x:0 }}
          // exit={{ opacity: 0 }}
          transition={{ duration: 0.5}}
        >
          <Typography variant="subtitle1" className=" sm:w-[50rem] text-slate-700 font-medium ">
{props.description}
          </Typography>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default Description;
