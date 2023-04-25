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
          className="h-[4rem] w-[4rem] cursor-pointer"
        />

        <div className="">
          <Typography variant="subtitle1" className="font-medium ">
            {`${review.user.firstName} ${review.user.lastName}`}
          </Typography>

          <div className="flex items-center    ">
            <Rating
              name="read-only"
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
            <Typography className=" font-medium text-gray-500 ml-4">
            {moment(review.createdAt).fromNow()}
            </Typography>
          </div>
        </div>
      </div>

      <Typography variant="subtitle1" className=" sm:w-[50rem] text-dark">
        {review.review}
      </Typography>
    </div>
  );
}

export default Review;
