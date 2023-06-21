import React from "react";
import Avatar from "@mui/material/Avatar";
import { Typography, Rating } from "@mui/material";
import moment from "moment";

function Review({ review }: any) {

  return (
    <div className="space-y-4 ">
      <div className="flex items-center space-x-2 ">
        <Avatar
          alt="profileImage"
          src={`http://localhost:4000/public/img/users/${review.user.profilePic}`}
          className="h-[3rem] w-[3rem] cursor-pointer"
        />

        <div className="">
          <Typography variant="subtitle1" className="font-semibold ">
            {`${review.user.firstName} ${review.user.lastName}`}
          </Typography>

          <div className="flex items-center    ">
            <Rating
              name="read-only"
              size="small"
              value={review.rating}
              readOnly
              className="text-amber-500 "
            />
            <Typography
              variant="subtitle1"
              className="font-bold text-dark ml-4 bg-red"
            >
              {review.ratting}
            </Typography>
            <Typography className=" font-medium text-slate-400 ml-4 text-sm">
            {moment(review.createdAt).fromNow()}
            </Typography>
          </div>
        </div>
      </div>

      <Typography variant="subtitle1" className=" sm:w-[50rem] text-slate-600 font-medium">
        {review.review}
      </Typography>
    </div>
  );
}

export default Review;
