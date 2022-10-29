import React from "react";
import { Typography } from "@mui/material";
import { AnimatePresence, motion } from "framer-motion";
interface IProps {
  toggle: boolean;
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
          <Typography variant="subtitle1" className=" sm:w-[50rem] text-dark ">
            {" "}
            In publishing and graphic design, Lorem ipsum is a placeholder text
            commonly used to demonstrate the visual form of a document or a
            typeface without relying on meaningful content. Lorem ipsum may be
            used as a placeholder before final copy is available.
          </Typography>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default Description;
