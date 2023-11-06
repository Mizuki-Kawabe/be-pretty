import { Container, Button } from "@mui/material"
import Image from "next/image";

const HomeSection = () => {
  return ( <>
  <Container max-width="7xl">
      <div className="text-center mt-8 grid gap-10 md:grid-cols-2 md:items-center md:text-left">
          <Image
            src="/home-1.png"
            alt="home image"
            width={400}
            height={400}
            className="w-full rounded-[59%] [41%] [37%] [63%] / [52%] [57%] [43%] [48%]"
            style={{borderRadius: '59% 41% 37% 63% / 52% 57% 43% 48%',}}
             />
          <div className="grid md:gap-10 sm:gap-5">
            <h1 className="font-bold mb-4">Be Pretty</h1>
            <div className="mb-4 text-gray">Be Pretty empowers you to effortlessly enhance your natural beauty and boost your self-confidence. Discover the world of beauty with ease, accessibility, and expertise at Be Pretty.</div>
            <div className="grid gap-4 md:grid-cols-2 justify-items-center">
            <Button variant="outlined" className="text-orange border-orange focus:border-orange hover:border-orange max-w-md">browse products</Button>
            <Button variant="outlined" className="text-orange border-orange focus:border-orange hover:border-orange max-w-md">book appointment</Button>
            </div>
          </div>
          <h1>Choose your beautician</h1>
          
      <div className="">
      </div>
    </div>
  </Container>
  </> );
}
 
export default HomeSection;