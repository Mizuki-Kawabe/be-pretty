"use client";
import { Rating } from "@mui/material";
import Image from "next/image";

interface ProductDetailsProps {
  product: any;
}

const Horizontal = () => {
  return <hr className="w-[30%] my-2 text-gray" />;
};

const ProductDetails: React.FC<ProductDetailsProps> = ({ product }) => {
  const productRating =
    product.reviews.reduce((acc: number, item: any) => item.rating + acc, 0) /
    product.reviews.length;

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 my-20">
        <Image
          width={300}
          height={300}
          className="w-full h-full object-contain"
          src={product.images[0].image}
          alt={product.name}
        />
        <div className="flex flex-col gap-4 text-sm">
          <span className="bg-lightGray w-fit rounded-lg px-2 py-1 color-gray font-normal">
            {product.category}
          </span>
          <h2 className="text-3xl font-medium text-md">{product.name}</h2>
          <div>{product.price}</div>
          <div className="flex items-center gap-2">
            <Rating value={productRating} readOnly />
            <div className="font-thin">{product.reviews.length} reviews</div>
          </div>
          <Horizontal />
          <div className="font-thin text-justify">{product.description}</div>
          <Horizontal />
          <div>
            <span className="font-bold">Category: </span>
            {product.category}
          </div>
          <div
            className={
              product.inStock
                ? "text-purple font-bold"
                : "text-deepTan font-bold"
            }
          >
            {product.inStock ? "In stock" : "Out of stock"}
          </div>
          <Horizontal />
          <div className="font-bold">Quantity: </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
