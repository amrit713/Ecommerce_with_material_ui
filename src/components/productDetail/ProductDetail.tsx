import React, { useEffect } from "react";

import Detail from "./Detail";
import DescriptionReview from "./DescriptionReview";
import { useTypedDispatch, useTypedSelector } from "../../../store/store";
import { getProduct } from "../../../store/action/productAction";
import { NextRouter, useRouter } from "next/router";

export default function ProductDetail() {
  const dispatch = useTypedDispatch();
  const router: NextRouter = useRouter();

  const { product } = useTypedSelector((state: any) => state.product);


  const pid: any = router.query.productDetail;


  useEffect(() => {
    dispatch(getProduct(pid));
  }, [dispatch, pid]);

  return (
    <div className="">
      <Detail product = {product} />
      {/* description and review */}

      <DescriptionReview description = {product?.description}/>
    </div>
  );
}
