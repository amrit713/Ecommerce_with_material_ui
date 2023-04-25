import { TextField, Typography } from "@mui/material";
import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import Review from "./Review";
import Rating from '@mui/material/Rating';
import { IProduct } from "../../interface/IProduct";

interface IProps {
  product:IProduct
  toggle: boolean;
}

function Reviews(props: IProps) {
  const [value, setValue] = React.useState<number | null>(1);
  return (
    <AnimatePresence>
      {!props.toggle && (
        <motion.div
          className="mt-4"
          initial={{ x: -40 }}
          animate={{ x: 0 }}
          // exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* review */}
          <div className="space-y-8">
            {props.product?.reviews?.map((review:any)=>(
              <div key={review.id}><Review review={review}/></div>
            ))}
            
            
          </div>
          <div className="space-y-4 mt-8">
            <Typography variant="h5" className="font-semibold">
              Write a review for this product
            </Typography>

            <div className="">
              <Typography className="text-dark mb-2">Your Rating*</Typography>

              <Rating
                name="simple-controlled"
                value={value}
                onChange={(event, newValue) => {
                  setValue(newValue);
                }}
              />
            </div>

            <div className="">
              <Typography className="text-dark mb-2">Your Review *</Typography>

              <TextField
                multiline={true}
                rows={6}
                required
                className="w-full"
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default Reviews;
