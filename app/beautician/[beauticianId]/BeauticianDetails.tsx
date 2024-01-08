"use client";

import { FaInstagram } from "react-icons/fa";
import Container from "@/app/components/Container";
import Image from "next/image";
import { truncateText } from "@/utils/truncateText";

interface BeauticianDetailsProps {
  beautician: any;
}

const ProductDetails: React.FC<BeauticianDetailsProps> = ({ beautician }) => {
  return (
    <>
      <div className="bg-[url('/beautician-bg.png')] bg-cover w-screen h-40 bg-center"></div>
      <div className="absolute top-[150px] w-full">
        <Container>
          <div className="flex m-auto flex-col mb-5 relative">
            <Image
              src={beautician.img}
              alt="beautician image"
              width={150}
              height={150}
              className="rounded-full mx-auto md:mx-0"
            />
          </div>
          <div className="text-2xl font-medium mt-10 text-center md:text-left mb-3">
            {beautician.name}
          </div>
        </Container>
      </div>

      <Container>
        <div className="mt-40">
          <FaInstagram className="mt-4 text-2xl md:ml-auto mb-2" />
          <div className="flex mb-8">
            <a className="md:ml-auto">
              {truncateText(
                "https://blush-platform.com/user/watch-profile-expert/356"
              )}
            </a>
          </div>
        </div>
        <div className="bg-beigePink p-5 rounded-xl mb-10">
          <div className="text-xl font-medium mb-2">Profile</div>
          <p>{beautician.profile}</p>
        </div>
        <div className="grid gap-y-4 md:justify-between md:grid-cols-2 gap-4">
          {beautician.menu.map((menu: any, index: any) => (
            <div
              className="flex flex-col justify-between border-4 p-5 rounded-xl"
              key={index}
            >
              <div>
                <div className="text-xl font-medium ">Menu</div>
                <div className="my-3">
                  Session Duration : {menu.duration} min
                </div>
                <div>{menu.name}</div>
                <div>{menu.detail}</div>
              </div>
              <div className="text-xl font-medium text-right">
                ${menu.price}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-10 bg-beigePink p-5 rounded-xl mb-10">
          <div className="text-xl font-medium mb-4">Brand</div>
          <div className="flex flex-wrap gap-4">
            {beautician.brand.map((item: any, index: any) => (
              <span key={index} className="bg-pinkWhite p-1 px-3 rounded-full">
                {item}
              </span>
            ))}
          </div>
        </div>
      </Container>
    </>
  );
};

export default ProductDetails;
