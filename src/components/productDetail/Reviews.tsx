import { Button, TextField, Typography } from "@mui/material";
import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect } from "react";
import Review from "./Review";
import Rating from "@mui/material/Rating";
import { IProduct } from "../../interface/IProduct";
import { useFormik } from "formik";
import {
  getReviewsAction,
  postReviewAction,
} from "../../../store/action/reviewAction";
import { useTypedDispatch, useTypedSelector } from "../../../store/store";
import { useRouter } from "next/router";
import { toast } from "react-hot-toast";

interface IProps {
  product: IProduct;
  toggle: boolean;
}

interface IValues {
  rating: number;
  review: string;
}

const initialValues: IValues = {
  rating: 1,
  review: "",
};

function Reviews(props: IProps) {
  const dispatch = useTypedDispatch();
  const router = useRouter();
  const { error } = useTypedSelector((state) => state.review);

  const { values, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: initialValues,
    onSubmit: (value) => {
      dispatch(postReviewAction({ ...value, id: router.query.pid }));
    },
  });

  useEffect(() => {
    if (error) {
      toast.error(error);
    }
  }, [error, router]);

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
            {props.product?.reviews?.map((review: any) => (
              <div key={review.id}>
                <Review review={review} />
              </div>
            ))}
          </div>
          <form action="" onSubmit={handleSubmit}>
            <div className="space-y-4 mt-8">
              <Typography variant="h5" className="font-semibold">
                Write a Review for this product
              </Typography>

              <div className="">
                <Typography className="text-slate-500 mb-2 font-semibold">
                  Your Rating*
                </Typography>

                <Rating
                  name="rating"
                  value={values.rating}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </div>

              <div className="">
                <Typography className="text-slate-500 mb-2 font-semibold">
                  Your Review *
                </Typography>

                <TextField
                  name="review"
                  value={values.review}
                  multiline={true}
                  rows={6}
                  required
                  className="w-full"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <Button
                  type="submit"
                  variant="contained"
                  className={`capitalize mt-2 font-semibold  
                  `}
                  disabled={values.review ? false : true}
                >
                  Submit
                </Button>
              </div>
            </div>
          </form>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default Reviews;
