

import Detail from "./Detail";
import DescriptionReview from "./DescriptionReview";



import { IProduct } from "../../interface/IProduct";

interface IProps{
  product: IProduct;
  relatedProducts: IProduct[];
}

export default function ProductDetail({product, relatedProducts}:IProps) {


  return (
    <div className="">
      <Detail  product = {product} />
      {/* description and review */}

      <DescriptionReview description = {product?.description} relatedProducts={relatedProducts} product={product}/>
    </div>
  );
}

