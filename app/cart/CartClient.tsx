"use client";
import { useCart } from "@/hooks/useCart";
import { formatPrice } from "@/utils/formatPrice";
import { dividerClasses } from "@mui/material";
import Link from "next/link";
import { FormEvent, useRef, useState } from "react";
import { MdArrowBack } from "react-icons/md";
import Button from "../components/Button";
import Heading from "../components/Heading";
import ItemContent from "./itemContent";
import Image from "next/image";
import { useSession } from "next-auth/react";
import toast from "react-hot-toast";

const CartClient = () => {
  const [isPaymentProcessing, setIsPaymentProcessing] = useState(false);
  const [isPaymentDone, setIsPaymentDone] = useState(false);
  const { cartProducts, handleClearCart, cartTotalAmount } = useCart();
  const paymentRef = useRef<HTMLDialogElement | null>(null);
  const { data: session, status } = useSession();

  console.log("data", session);
  console.log("status", status);

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

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsPaymentProcessing(true);

    setTimeout(() => {
      setIsPaymentProcessing(false);
      setIsPaymentDone(true);

      setTimeout(() => {
        paymentRef.current?.close();
        setIsPaymentDone(false);
        handleClearCart();
      }, 3000);
    }, 3000);
  };

  return (
    <div>
      <Heading title="Shopping Cart" center />
      <div className="md:hidden">
        <div className="grid grid-cols-3 text-xs gap-4 pb-2 items-center mt-8 border-b-[1.5px] border-slate-200">
          <div className="justify-start">PRODUCT</div>

          <div className="justify-self-center">QUANTITY</div>
          <div className="justify-self-end">TOTAL</div>
        </div>
        <div>
          {cartProducts &&
            cartProducts.map((item) => {
              return <ItemContent key={item.id} item={item} />;
            })}
        </div>
        <div className="py-4">
          <div className="w-full flex justify-end">
            <button
              className="btn btn-outline text-slate-500"
              onClick={() => {
                handleClearCart();
              }}
            >
              ClearCart
            </button>
          </div>

          <div className="text-sm flex flex-col gap-3 items-start mt-10">
            <div className="flex justify-between w-full text-base font-semibold">
              <span>SubTotal</span>
              <span>{formatPrice(cartTotalAmount)}</span>
            </div>

            <div className="flex flex-col w-full">
              {status === "authenticated" ? (
                <button
                  className="btn bg-tan text-white border-none w-44 m-auto"
                  onClick={() => {
                    paymentRef.current?.showModal();
                  }}
                >
                  Check Out
                </button>
              ) : (
                <button
                  className="btn bg-tan text-white border-none w-44 m-auto"
                  onClick={() => {
                    toast.error("Log in to purchase");
                  }}
                >
                  Check Out
                </button>
              )}

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
      </div>
      {/* pc ver */}
      <div className="hidden md:block">
        <div className="grid grid-cols-5 text-xs gap-4 pb-2 items-center mt-8 border-b-[1.5px] border-slate-200">
          <div className="col-span-2 justify-start">PRODUCT</div>
          <div className="justify-self-center">PRICE</div>
          <div className="justify-self-center">QUANTITY</div>
          <div className="justify-self-end">TOTAL</div>
        </div>
        <div>
          {cartProducts &&
            cartProducts.map((item) => {
              return <ItemContent key={item.id} item={item} />;
            })}
        </div>
        <div className="py-4 flex justify-between gap-4">
          <div>
            <button
              className="btn btn-outline text-slate-500"
              onClick={() => {
                handleClearCart();
              }}
            >
              Clear Cart
            </button>
          </div>

          <div className="text-sm flex flex-col gap-1 items-start">
            <div className="flex justify-between w-full text-base font-semibold mb-3">
              <span>SubTotal</span>
              <span>{formatPrice(cartTotalAmount)}</span>
            </div>

            {status === "authenticated" ? (
              <button
                className="btn bg-tan text-white border-none w-44 m-auto"
                onClick={() => {
                  paymentRef.current?.showModal();
                }}
              >
                Check Out
              </button>
            ) : (
              <button
                className="btn bg-tan text-white border-none w-44 m-auto"
                onClick={() => {
                  toast.error("Log in to purchase");
                }}
              >
                Check Out
              </button>
            )}

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
      <dialog
        ref={paymentRef}
        id="my_modal_3"
        className="modal modal-bottom sm:modal-middle"
      >
        {isPaymentProcessing ? (
          <div className="modal-box bg-white">
            <h3 className="font-bold text-lg text-center mb-2">
              Processing Payment...
            </h3>
            <Image
              src="/payment.gif"
              alt="payment image"
              width={300}
              height={300}
              className="m-auto"
            />
          </div>
        ) : isPaymentDone ? (
          <div className="modal-box bg-white">
            <h3 className="font-bold text-lg text-center mb-2">
              Thank you for your purchace!
            </h3>
          </div>
        ) : (
          <div className="modal-box bg-white">
            <form method="dialog">
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                ✕
              </button>
            </form>
            <h3 className="font-bold text-lg text-center">
              Enter Card Details
            </h3>
            <div className="text-center">
              <input
                type="text"
                name="fullName"
                className="w-full mt-6 border border-gray-700 p-4 rounded-sm bg-white"
                placeholder="Enter your full name"
                aria-label="Full name"
                required
              ></input>
              <input
                type="number"
                name="card"
                className="w-full mt-6 border border-gray-700 p-4 rounded-sm  bg-white"
                placeholder="Enter your card "
                aria-label="Email address"
                required
              ></input>
              <input
                type="number"
                name="input-cvv"
                className="w-full mt-6 border border-gray-700 p-4 rounded-sm  bg-white"
                placeholder="Enter your cvv"
                aria-label="cvv"
                required
              ></input>
              <form onSubmit={handleSubmit}>
                <button
                  type="submit"
                  className="btn block bg-deepTan border-none text-white m-auto mt-5 w-full"
                >
                  Pay
                </button>
              </form>
            </div>
          </div>
        )}
      </dialog>
    </div>
  );
};

export default CartClient;
