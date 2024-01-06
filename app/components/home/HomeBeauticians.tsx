"use client";
import { beauticians } from "@/utils/beauticians";

import BeauticianCard from "../beauticians/BeauticianCard";
import { useRouter } from "next/navigation";

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
      {beauticians.map((beautician: Beautician) => (
        <div key={beautician.id} className="carousel-item mr-4">
          <BeauticianCard data={beautician} />
        </div>
      ))}
    </div>
  );
};

export default CardSlider;
