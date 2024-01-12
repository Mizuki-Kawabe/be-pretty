"use client";

import { FaInstagram, FaLastfmSquare } from "react-icons/fa";
import Container from "@/app/components/Container";
import Image from "next/image";
import { truncateText } from "@/utils/truncateText";
import { useFavoriteBeauticians } from "@/hooks/useFavoriteBeauticians";
import { useSession } from "next-auth/react";
import toast from "react-hot-toast";

interface Beautician {
  id: string;
  img: string;
  name: string;
  profile: string;
  portfolioUrl: string;
  brand: string[];
  skills: string[];
  menu: Menu[];
}

interface Menu {
  name: string;
  detail: string;
  price: number;
  duration: number;
}

interface BeauticianDetailsProps {
  beautician: Beautician;
}

const ProductDetails: React.FC<BeauticianDetailsProps> = ({ beautician }) => {
  const { favoriteBeauticiansId, addFavorite, removeFavorite, isFavorite } =
    useFavoriteBeauticians();
  const { data: session, status } = useSession();

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
            {isFavorite(beautician.id) && status === "authenticated" ? (
              <div
                onClick={() => {
                  removeFavorite(beautician.id);
                }}
                className="mt-1 text-blue cursor-pointer"
              >
                - Remove from favorite
              </div>
            ) : !isFavorite(beautician.id) && status === "authenticated" ? (
              <div
                className="text-deepTan mt-1 cursor-pointer"
                onClick={() => {
                  addFavorite(beautician.id);
                }}
              >
                + Add to favorite
              </div>
            ) : (
              <div
                className="text-deepTan mt-1 cursor-pointer"
                onClick={() => {
                  toast.error("Please Log in to add");
                }}
              >
                + Add to favorite
              </div>
            )}
          </div>
        </Container>
      </div>

      <Container>
        <div className="mt-52">
          <FaInstagram className="mt-4 text-2xl md:ml-auto mb-2" />
          <div className="flex mb-8">
            <a className="md:ml-auto">
              {truncateText(beautician.portfolioUrl)}
            </a>
          </div>
        </div>

        <div className="bg-beigePink p-5 rounded-xl mb-10">
          <div className="text-xl font-medium mb-2">Profile</div>
          <p>{beautician.profile}</p>
        </div>
        <div className="text-xl font-medium mb-2">Menu</div>
        <div className="grid gap-y-4 md:justify-between md:grid-cols-2 gap-4">
          {beautician.menu.map((menu: any, index: any) => (
            <div
              className="flex flex-col justify-between border-4 p-5 rounded-xl"
              key={index}
            >
              <div>
                <div className="text-xl font-medium ">{menu.name}</div>
                <div className="my-3">
                  Session Duration :{" "}
                  <span className="font-medium">{menu.duration}</span> min
                </div>

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
        <div className="mt-10 bg-beigePink p-5 rounded-xl mb-10">
          <div className="text-xl font-medium mb-4">Skills</div>
          <div className="flex flex-wrap gap-4">
            {beautician.skills.map((item: any, index: any) => (
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
