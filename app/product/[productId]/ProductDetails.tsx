"use client";
import Button from "@/app/components/Button";
import { useCart } from "@/hooks/useCart";
import { formatPrice } from "@/utils/formatPrice";
import { Rating } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useCallback, useEffect, useState } from "react";
import SetQuantity from "../../components/products/setQuantity";

interface ProductDetailsProps {
  product: any;
}

export type CartProductType = {
  id: string;
  name: string;
  description: string;
  category: String;
  brand: string;
  selectedImg: selectedImgType;
  quantity: number;
  price: number;
};

export type selectedImgType = {
  color: string;
  colorCode: string;
  image: string;
};

const Horizontal = () => {
  return <hr className="w-[30%] my-2 text-gray" />;
};

const ProductDetails: React.FC<ProductDetailsProps> = ({ product }) => {
  const { handleAddProductToCart, cartProducts } = useCart();
  const [isProductInCart, setIsProductInCart] = useState(false);
  const { cartTotalQty } = useCart();
  const router = useRouter();

  const [cartProduct, setCartProduct] = useState<CartProductType>({
    id: product.id,
    name: product.name,
    description: product.description,
    category: product.category,
    brand: product.brand,
    selectedImg: { ...product.images[0] },
    quantity: 1,
    price: product.price,
  });

  useEffect(() => {
    setIsProductInCart(false);
    if (cartProducts) {
      const existingIndex = cartProducts.findIndex(
        (item) => item.id === product.id
      );
      if (existingIndex > -1) {
        setIsProductInCart(true);
      }
    }
  }, [cartProducts]);

  const productRating =
    product.reviews.reduce((acc: number, item: any) => item.rating + acc, 0) /
    product.reviews.length;

  const handleQtyIncrease = useCallback(() => {
    if (cartProduct.quantity == 50) {
      return;
    }
    setCartProduct((prev) => {
      return { ...prev, quantity: prev.quantity + 1 };
    });
  }, [cartProduct]);

  const handleQtyDecrease = useCallback(() => {
    setCartProduct((prev) => {
      const newQuantity = Math.max(1, prev.quantity - 1);
      return { ...prev, quantity: newQuantity };
    });
  }, []);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 my-20 self-start">
        <Image
          width={300}
          height={300}
          className="w-full object-contain"
          src={product.images[0].image}
          alt={product.name}
        />
        <div className="flex flex-col gap-4 text-sm">
          <span className="bg-lightGray w-fit rounded-lg px-2 py-1 color-gray font-normal">
            {product.category}
          </span>
          <h2 className="text-3xl font-medium text-md">{product.name}</h2>
          <div>{formatPrice(product.price)}</div>
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
          <div>
            <span className="font-bold">Brand: </span>
            {product.brand}
          </div>
          <div className={product.inStock ? "text-purple" : "text-deepTan"}>
            {product.inStock ? "In stock" : "Out of stock"}
          </div>
          <Horizontal />
          {isProductInCart ? (
            <div className="max-w-[300px]">
              <div
                className="btn w-full text-deepTan btn-outline"
                onClick={() => router.push("/cart")}
              >
                View Cart
              </div>
            </div>
          ) : (
            <>
              <SetQuantity
                cartProduct={cartProduct}
                handleQtyIncrease={handleQtyIncrease}
                handleQtyDecrease={handleQtyDecrease}
              />
              <Horizontal />
              <div className="max-w-[300px]">
                <button
                  className="btn w-full bg-tan text-white border-none"
                  onClick={() => handleAddProductToCart(cartProduct)}
                >
                  Add To Cart
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
