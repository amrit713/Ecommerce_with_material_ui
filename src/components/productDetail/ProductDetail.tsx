import React from "react";
import Image from "next/image";
import { Typography, Button } from "@mui/material";


import Detail from "./Detail";
import DescriptionReview from "./DescriptionReview";
export default function ProductDetail() {
  return (
    <div className="mt-24">
      
      <Detail/>
      {/* description and review */}
      
      <DescriptionReview />
    </div>
  );
}
