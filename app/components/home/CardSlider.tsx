// "use client";
import { beauticians } from "@/utils/beauticians";
import Image from "next/image";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css"; 
// import "slick-carousel/slick/slick-theme.css";


interface Beautician {
  id: number;
  name: string;
  img: string;
  profile: string
}

const CardSlider:React.FC = () => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3
  };

  return ( 
    <div className="w-3/4 m-auto">
      <div className="mt-20">
        {/* <Slider {...settings}> */}
        {beauticians.map((d: Beautician) => (
          <div key={d.id} className="bg-white h-[450px] text-mb rounded-xl">
            <div className="h-56 rounded-t-xl bg-pink flex justify-center items-center w-full">
              <Image
              src={d.img}
              alt="profile"
              width={400}
              height={400}
              className="h-44 w-44 rounded-full"
              />
            </div>

            <div className="flex flex-col justify-center items-center gap-4 p-4">
              <p className="text-xl font-semibold">{d.name}</p>
              <p>{d.profile}</p>
            </div>
          </div>
        ))}
        {/* </Slider> */}
      </div>
    </div>
   );
}
 
export default CardSlider;