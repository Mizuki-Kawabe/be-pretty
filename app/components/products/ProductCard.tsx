"use client";
import { formatPrice } from "@/utils/formatPrice";

import { truncateText } from "@/utils/truncateText";
import { Rating } from "@mui/material";
// import { Rating } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface ProductCardProps {
  data: any;
}

const ProductCard: React.FC<ProductCardProps> = ({ data }) => {
  const router = useRouter();

  const productRating =
    data.reviews.reduce((acc: number, item: any) => item.rating + acc, 0) /
    data.reviews.length;

  return (
    <div className="my-5" onClick={() => router.push(`/product/${data.id}`)}>
      <div className="col-span-1 cursor-pointer transition hover:scale-105 text-center text-sm">
        <div className=""></div>
        <div className="flex flex-col items-center w-full gap-1"></div>
        <div className="aspect-square overflow-hidden relative w-full">
          <Image
            width={300}
            height={300}
            className="w-full h-full object-contain"
            src={data.images[0].image}
            alt={data.name}
          />
        </div>
        <div className="mt-4 break-all">{truncateText(data.name)}</div>
        <div className="mt-2 text-gray">{data.reviews.length} Reviews</div>
        <Rating value={productRating} readOnly />
        <div className="mt-2 font-semibold">{formatPrice(data.price)}</div>
      </div>
    </div>
  );
};

export default ProductCard;
