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
      <Container>
        <div className="flex m-auto flex-col mb-5">
          <Image
            src={beautician.img}
            alt="beautician image"
            width={150}
            height={150}
            className="rounded-full mt-10 mx-auto md:mx-0"
          />
          <div className="text-2xl font-medium mt-10 inline text-center md:text-left mb-3">
            {beautician.name}
          </div>
        </div>
        <div className="mb-14">
          <FaInstagram className="mt-4 text-2xl md:ml-auto mb-2" />
          <div className="flex">
            <a className="md:ml-auto">
              {truncateText(
                "https://blush-platform.com/user/watch-profile-expert/356"
              )}
            </a>
          </div>
        </div>
        <div className="bg-lightPink p-5 rounded-xl mb-5">
          <div className="text-xl font-medium mb-2">Profile</div>
          <p>{beautician.profile}</p>
        </div>
        <div className="grid gap-y-4 md:justify-between md:grid-cols-2 gap-4">
          <div className="flex flex-col justify-between border-4 p-5 rounded-xl">
            <div>
              <div className="text-xl font-medium ">Menu</div>
              <div className="my-3">
                Session Duration : {beautician.menu[0].duration} min
              </div>
              <div>{beautician.menu[0].name}</div>
              <div>{beautician.menu[0].detail}</div>
            </div>
            <div className="text-xl font-medium text-right">
              ${beautician.menu[0].price}
            </div>
          </div>
          <div className="flex flex-col justify-between border-4 p-5 rounded-xl">
            <div>
              <div className="text-xl font-medium ">Menu</div>
              <div className="my-3">
                Session Duration : {beautician.menu[0].duration} min
              </div>
              <div>{beautician.menu[1].name}</div>
              <div>{beautician.menu[1].detail}</div>
            </div>
            <div className="text-xl font-medium text-right">
              ${beautician.menu[1].price}
            </div>
          </div>
        </div>
        <div className="mt-10">
          <div className="text-xl font-medium mb-2">Brand</div>ß
          <span className="">{beautician.brand[0]}</span>
        </div>
      </Container>
    </>
  );
};

export default ProductDetails;
