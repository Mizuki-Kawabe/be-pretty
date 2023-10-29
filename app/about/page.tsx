import { Container} from "@mui/material";
import Footer from "../components/footer/Footer";
import NavBar from "../components/nav/NavBar";
import Image from "next/image";

const About = () => {
  return ( <>
    <NavBar/>
    {/* why? */}
    <div className="bg-pink w-full h-52">
      <Container className="h-full flex justify-center items-center">
        <div className="font-bold text-mb text-4xl">ABOUT</div>
      </Container>
    </div>
      
        <Container>
          <div className="md:flex mt-14">
            <Image
              src="/about-photo.jpg"
              alt="about us image"
              width={200}
              height={200}
              className="w-full rounded-xl"
            />
            <div>
              <h1 className="font-semibold mb-4 mt-6">Why Be Pretty?</h1>
              <div className="mb-4 text-gray">For over a decade, Be Pretty has been a pioneer in the beauty and wellness industry, offering a holistic approach to enhancing natural beauty and self-confidence. Founded by a team of dedicated beauticians, our company has become a trusted partner for individuals seeking top-quality beauty products and personalized consultations. 
              </div>
            </div>
          </div>

          <h1 className="font-semibold mb-4 mt-6">Who are we</h1>
          <div className="mb-4 text-gray">Be Pretty is a passionate team of beauty enthusiasts and experts dedicated to helping you look and feel your absolute best.
          </div>
          <h1 className="font-semibold mb-4 mt-6">What we offer</h1>
          <div className="flex">
            <div>
              <Image
                src="/product1.png"
                alt="about us image"
                width={100}
                height={100}
                className="w-full rounded-xl"
              />
              <li>Premium Beauty Products</li>
            </div>
            <div>
              <Image
                src="/product1.png"
                alt="about us image"
                width={200}
                height={200}
                className="w-full rounded-xl"
              />
              <li>Premium Beauty Products</li>
            </div>
            <div>
              <Image
                src="/product1.png"
                alt="about us image"
                width={200}
                height={200}
                className="w-full rounded-xl"
              />
              <li>Premium Beauty Products</li>
            </div>
          </div>
      </Container>
    <Footer/>
    

  </> );
}
 
export default About;