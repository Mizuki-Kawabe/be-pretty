import Image from "next/image";
import Link from "next/link";
import Container from "../Container";
import CardSlider from "./CardSlider";
import HomeProducts from "./HomeProducts";
import { FaArrowRight } from "react-icons/fa";

const HomeSection = () => {
  return (
    <>
      <Container>
        <div className="text-center mt-8 grid gap-10 md:grid-cols-2 md:items-center md:text-left ">
          <Image
            src="/home-1.png"
            alt="home image"
            width={400}
            height={400}
            className="w-full rounded-[59%] [41%] [37%] [63%] / [52%] [57%] [43%] [48%]"
            style={{ borderRadius: "59% 41% 37% 63% / 52% 57% 43% 48%" }}
          />
          <div className="grid md:gap-10 sm:gap-5">
            <h1 className="font-bold mb-4">
              <span className="text-transparent bg-gradient-to-r from-tan to-deepTan bg-clip-text mr-2">
                Transform
              </span>
              your beauty routine with Be Pretty!
            </h1>
            <div className="mb-4 text-gray text-left">
              Elevate your beauty skills with Be Pretty, offering personalized
              online makeup lessons from expert beauticians and a curated
              selection of recommended cosmetics for a radiant transformation.
            </div>
          </div>
        </div>
      </Container>

      <div className="bg-gradient-to-r from-indigo-100 to-rose-100 py-10 mt-20 mb-5">
        <h1 className="text-center mb-10 font-normal">
          Choose your beautician
        </h1>
        <CardSlider />

        <Container>
          <div className="mt-5 mr-5 flex">
            <a
              href=""
              className="flex items-center font-bold text-lg text-black ml-auto"
            >
              Browse more beauticians <FaArrowRight className="ml-1" />
            </a>
          </div>
        </Container>
      </div>

      <Container>
        <div className="mb-20">
          <h1 className="text-center mt-20 font-normal">Top Picks</h1>
          <div className="text-center">
            Check out the latest cosmetics trends and consult with a counselor
            on how to choose and use them.
          </div>
          <HomeProducts />
          <div className="mr-5 flex">
            <a
              href="/product"
              className="flex items-center font-bold text-lg text-black ml-auto"
            >
              Browse more products <FaArrowRight className="ml-1" />
            </a>
          </div>
        </div>
      </Container>
      <div className="bg-[url('/about-us.jpg')] h-72 bg-center flex items-center justify-center">
        <Link
          href="/about"
          className="btn bg-blue text-white border-none hover:bg-tan active:bg-tan rounded-full"
        >
          Explore More About Us
        </Link>
      </div>
    </>
  );
};

export default HomeSection;
