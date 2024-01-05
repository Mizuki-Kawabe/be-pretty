"use client";
import { beauticians } from "@/utils/beauticians";
import Image from "next/image";
import { omitText } from "@/utils/omitText";
import { FreeMode, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { truncateText } from "@/utils/truncateTextLong";

interface Beautician {
  id: number;
  name: string;
  img: string;
  profile: string;
  program: string;
  price: number;
  duration: number;
  programDetail: string;
}

const CardSlider: React.FC = () => {
  return (
    <div className="carousel carousel-end rounded-box w-full px-5">
      {beauticians.map((d: Beautician) => (
        <div className="carousel-item bg-white card w-[300px] mr-5" key={d.id}>
          <figure className="mt-4">
            <Image
              src={d.img}
              alt="beautician image"
              width={150}
              height={150}
              className="rounded-full"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{d.name}</h2>
            <p>{truncateText(d.profile)}</p>
            <button className="btn rounded-full mb-2 bg-blue border-none flex flex-col h-[5rem]">
              <div className="text-white font-normal leading-snug">
                {d.program}
              </div>
              <div className="text-white font-normal">
                {d.duration}mins ${d.price}
              </div>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardSlider;
