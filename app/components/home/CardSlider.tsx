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
    <div className="w-full m-auto px-2">
      <div className="mt-10">
        {beauticians.map((d: Beautician) => (
          <>
            <div className="card w-96 bg-base-100 shadow-xl">
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
          </>
        ))}
      </div>
    </div>
  );
};

export default CardSlider;
