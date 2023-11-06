'use client';

import { Rating } from "@mui/material";

interface ProductDetailsProps{
  product: any;
}

const Horizontal = () => {
  return <hr className ="w-[30% my-2] text-gray" />
}

const ProductDetails:React.FC<ProductDetailsProps> = ({product}) => {

  const productRating = product.reviews.reduce((acc:number, item:any)=> item.rating + acc, 0)/ product.reviews.length

  return ( <>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
    <div>Images</div>
    <div className="flex flex-col gap-1 text-sm">
    <div>
      <h2 className="text-3xl font-medium text-md">{product.name}</h2>
      <div>{product.price}</div>
      <div className="flex items-center gap-2">
        <Rating value={productRating} readOnly/>
        <div className="font-thin">{product.reviews.length} reviews</div>
      </div>
      <div className="font-thin text-justify">{product.description}</div>
      {/* <div className={product.inStock ? 'text-teal-400'}>{product.inStock ? 'In stock' : 'Out of stock'}</div> */}
    </div>
    </div>
  </div>
  </> );
}
 
export default ProductDetails;