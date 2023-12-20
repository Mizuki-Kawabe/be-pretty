"use client";

import { formatPrice } from "@/utils/formatPrice";
import { truncateText } from "@/utils/truncateText";
import Link from "next/dist/client/link";
import { CartProductType } from "../product/[productId]/ProductDetails";
import Image from "next/image";
import SetQuantity from "../components/products/setQuantity";

interface ItemContentProps {
  item: CartProductType;
}

const ItemContent: React.FC<ItemContentProps> = ({ item }) => {
  return (
    <div
      key={item.id}
      className="
grid grid-cols-5 text-xs md:text-sm gap-4 border-t-[1.5px] border-b-[1.5px] border-slate-200 py-4 items-center"
    >
      <div className="col-span-2 justify-self-start flex gap-2 md:gap-4">
        <Link href={`/product/${item.id}`}>
          <div className="relative w-[70px] aspect-square">
            <Image
              src={item.selectedImg.image}
              alt={item.name}
              fill
              className="object-contain"
            />
          </div>
        </Link>
        <div className="flex flex-col justify-between">
          <Link href={`/product/${item.id}`}>{truncateText(item.name)}</Link>

          <div className="w-[70px] mt-1">
            <button
              className="link bg-offWhite text-slate-500"
              onClick={() => {}}
            >
              Remove
            </button>
          </div>
        </div>
      </div>

      <div>{formatPrice(item.price)}</div>
      <div>
        <SetQuantity
          cartCounter={true}
          cartProduct={item}
          handleQtyIncrease={() => {}}
          handleQtyDecrease={() => {}}
        />
      </div>
      <div className="font-semibold">
        {formatPrice(item.price * item.quantity)}
      </div>
    </div>
  );
};

export default ItemContent;
