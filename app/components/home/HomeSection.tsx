import Image from "next/image";
import Link from "next/link";
import Container from "../Container";
import CardSlider from "./CardSlider";
import HomeProducts from "./HomeProducts";

const HomeSection = () => {
  return (
    <>
      <Container>
        <div className="text-center mt-8 grid gap-10 md:grid-cols-2 md:items-center md:text-left">
          <Image
            src="/home-1.png"
            alt="home image"
            width={400}
            height={400}
            className="w-full rounded-[59%] [41%] [37%] [63%] / [52%] [57%] [43%] [48%]"
            style={{ borderRadius: "59% 41% 37% 63% / 52% 57% 43% 48%" }}
          />
          <div className="grid md:gap-10 sm:gap-5">
            <h1 className="font-bold mb-4">Be Pretty</h1>
            <div className="mb-4 text-gray">
              Be Pretty empowers you to effortlessly enhance your natural beauty
              and boost your self-confidence. Discover the world of beauty with
              ease, accessibility, and expertise at Be Pretty.
            </div>
          </div>
        </div>
        <div>
          <h1 className="text-center mt-20">Choose your beautician</h1>
          <CardSlider />
        </div>
        <div className="w-10 h-20"></div>
        <div>
          <h1 className="text-center my-20">Top Picks</h1>
          <HomeProducts />
        </div>
      </Container>
      <div className="bg-[url('/about-us.jpg')] h-72 bg-center flex items-center justify-center">
        <Link
          href="/about"
          className="btn bg-deepTan text-white border-none hover:bg-tan active:bg-tan"
        >
          Explore More About Us
        </Link>
      </div>
    </>
  );
};

export default HomeSection;
