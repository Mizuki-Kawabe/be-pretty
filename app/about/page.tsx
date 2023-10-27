import { Container } from "@mui/material";
import Footer from "../components/footer/Footer";
import NavBar from "../components/nav/NavBar";

const About = () => {
  return ( <>
    <NavBar/>
    {/* why? */}
    <div className="bg-pink w-full h-48">
      <Container className="h-full flex justify-center items-center">
        <div className="font-bold text-white text-5xl">ABOUT</div>
      </Container>
    </div>
      
        <Container>
        <h1 className="font-bold text-2xl mb-4">Why Be Pretty?</h1>
        <div className="mb-4">At Be Pretty, we are more than just a beauty and wellness shop. We are your trusted partner in enhancing your natural beauty and boosting your self-confidence.
        </div>
        <h1 className="font-bold text-2xl mb-4">Who are we</h1>
        <div className="mb-4">Be Pretty is a passionate team of beauty enthusiasts and experts dedicated to helping you look and feel your absolute best.
        </div>
        <h1 className="font-bold text-2xl mb-4">What we offer</h1>
        <li>Premium Beauty Products</li>
        <li>Personalized Services</li>
        <li>Expert Advice</li>
      </Container>
    <Footer/>
    

  </> );
}
 
export default About;