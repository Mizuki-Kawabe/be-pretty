"use client";
import { beauticians } from "@/utils/beauticians";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { omitText } from "@/utils/omitText";
import { Button } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";

interface Beautician {
  id: number;
  name: string;
  img: string;
  profile: string;
}

const CardSlider: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="w-full m-auto px-2">
      <div className="mt-10">
        <Slider {...settings} className="p-1">
          {beauticians.map((d: Beautician) => (
            <div
              key={d.id}
              className="bg-white h-94 rounded-xl cursor-pointer shadow-[5px_5px_0px_0px_#e6d8d7]"
            >
              <div className="p-6">
                <div className="relative">
                  <div className="rounded-t-xl bg-pink flex justify-center items-center w-full">
                    <Image
                      src={d.img}
                      alt="profile"
                      width={400}
                      height={400}
                      className="h-44 w-44 rounded-full"
                    />
                  </div>
                  <div className="text-yellow absolute top-0 right-0 flex flex-col items-center">
                    <StarIcon className="" />
                    <span>5</span>
                  </div>
                </div>

                <div className="flex flex-col justify-center items-center gap-4 mt-3">
                  <p className="text-xl font-semibold line-clamp-1">{d.name}</p>
                  <div className="line-clamp-3">{d.profile}</div>
                </div>
                <div className="flex mt-2">
                  <Button
                    variant="contained"
                    className="bg-deepTan m-auto rounded-full"
                  >
                    Book
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default CardSlider;
