"use client";
import { beauticians } from "@/utils/beauticians";
import Image from "next/image";
import { omitText } from "@/utils/omitText";
import { FreeMode, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

interface Beautician {
  id: number;
  name: string;
  img: string;
  profile: string;
}

const CardSlider: React.FC = () => {
  return (
    <div className="carousel carousel-end rounded-box w-full">
      {beauticians.map((d: Beautician) => (
        <div className="carousel-item bg-white card" key={d.id}>
          <figure>
            <Image
              src={d.img}
              alt="beautician image"
              width={400}
              height={400}
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {d.name}
              <div className="badge badge-secondary">NEW</div>
            </h2>
            <p>{d.profile}</p>
            <div className="card-actions justify-end">
              <div className="badge badge-outline">Fashion</div>
              <div className="badge badge-outline">Products</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardSlider;
