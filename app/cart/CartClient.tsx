"use client";
import { useCart } from "@/hooks/useCart";
import { dividerClasses } from "@mui/material";
import Link from "next/link";
import { MdArrowBack } from "react-icons/md";
import Button from "../components/Button";
import Heading from "../product/[productId]/Heading";
import ItemContent from "./itemContent";

const CartClient = () => {
  const { cartProducts } = useCart();

  if (!cartProducts || cartProducts.length === 0) {
    return (
      <div className="flex flex-col items-center">
        <div className="text-2xl">Your cart is empty</div>
        <div>
          <Link
            href={"/"}
            className="text-slate-500 flex items-center gap-1 mt-2"
          >
            <MdArrowBack />
            <span>Go back to home</span>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div>
      <Heading title="Shopping Cart" center />
      <div className="grid grid-cols-5 text-xs gap-4 pb-2 items-center mt-8">
        <div className="col-span-2 justify-start">PRODUCT</div>
        <div className="justyfy-self-center">PRICE</div>
        <div className="justyfy-self-center">QUANTITY</div>
        <div className="justyfy-self-end">TOTAL</div>
      </div>
      <div>
        {cartProducts &&
          cartProducts.map((item) => {
            return <ItemContent key={item.id} item={item} />;
          })}
      </div>
      <div className="py-4 flex justify-between gap-4">
        <div className="w-[90px]">
          <button className="btn btn-outline text-slate-500" onClick={() => {}}>
            ClearCart
          </button>
        </div>

        <div className="text-sm flex flex-col gap-1 items-start">
          <div className="flex justify-between w-full text-base font-semibold">
            <span>SubTotal</span>
            <span>$1,000</span>
          </div>
          <p className="tet-slate-500">
            Taxes and shipping calculated at checkout
          </p>

          <button
            className="btn bg-tan text-white border-none"
            onClick={() => {}}
          >
            Checkout
          </button>
          <Link
            href={"/"}
            className="text-slate-500 flex items-center gap-1 mt-2"
          >
            <MdArrowBack />
            <span>Go back to home</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CartClient;
