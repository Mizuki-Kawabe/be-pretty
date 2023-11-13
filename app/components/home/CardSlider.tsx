"use client";
import { beauticians } from "@/utils/beauticians";
import Image from "next/image";
import { omitText } from "@/utils/omitText";

interface Beautician {
  id: number;
  name: string;
  img: string;
  profile: string;
}

const CardSlider: React.FC = () => {
  return (
    <div className="mt-10 carousel w-full">
      {beauticians.map((d: Beautician) => (
        <div className="carousel-item relative w-full" key={d.id}>
          <div className="card w-96 bg-base-100 shadow-[5px_5px_0px_0px_#e6d8d7]">
            <figure>
              <Image src={d.img} alt="Shoes" width={400} height={400} />
            </figure>
            <div className="card-body bg-offWhite">
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
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardSlider;
