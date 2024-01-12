import Image from "next/image";
import Container from "../components/Container";

const About = () => {
  return (
    <>
      <div className="bg-tan w-full h-52 flex items-center">
        <Container>
          <div className="h-full">
            <div className="font-bold text-mb text-4xl">About</div>
          </div>
        </Container>
      </div>

      <Container>
        <div className="mt-14 mb-14 lg:flex">
          <Image
            src="/about-us-1.jpg"
            alt="about us image"
            width={200}
            height={200}
            className="w-full rounded-xl lg:flex-1"
          />
          <div className="md:flex-1 lg:my-auto lg:ml-10">
            <h1 className="font-semibold mb-2 mt-6">Why Be Pretty?</h1>
            <div className="mb-8 text-gray">
              At Be Pretty, we understand that true beauty goes beyond cosmetics
              and fashion trends. For over a decade, we have been committed to
              redefining beauty standards and empowering individuals to embrace
              their natural beauty and boost their self-confidence. With a
              decade-long legacy of transforming lives, we are your trusted
              partner on your journey to self-discovery and self-expression.
            </div>
            <div className="md:flex">
              <div className="mb-4 md:flex-1">
                <p className="text-orange">Satisfied Clients</p>
                <div className="font-medium text-5xl">1100</div>
              </div>
              <div className="mb-4 md:flex-1">
                <p className="text-orange">Years of Experience</p>
                <div className="font-medium text-5xl">10</div>
              </div>
              <div className="md:flex-1">
                <p className="text-orange">Awards</p>
                <div className="font-medium text-5xl">78</div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-14 mb-14 lg:flex">
          <div className="md:flex-1 lg:my-auto lg:mr-6">
            <h1 className="font-semibold mb-2 mt-6">Who are we</h1>
            <div className="mb-8 text-gray">
              Be Pretty is not just a beauty and wellness shop; we are a team of
              dedicated beauticians and professionals founded by industry
              experts. Our united vision is to make beauty accessible, personal,
              and empowering.
            </div>
          </div>
          <Image
            src="/about-us-2.png"
            alt="about us image"
            width={200}
            height={200}
            className="w-full rounded-xl lg:flex-1"
          />
        </div>
        <h1 className="font-semibold mb-5 mt-6">What we offer</h1>
        <div className="md:grid md:grid-cols-2 md:gap-5 lg:grid-cols-3">
          <div className="mb-7">
            <h3 className="font-semibold text-center mb-2">
              ・Premium Skincare Products
            </h3>
            <Image
              src="/offer-1.png"
              alt="about us image"
              width={100}
              height={200}
              className="w-full rounded-xl"
              layout="responsive"
            />
          </div>
          <div className="mb-7">
            <h3 className="font-semibold text-center mb-2">
              ・Makeup Products
            </h3>
            <Image
              src="/offer-2.png"
              alt="about us image"
              width={100}
              height={200}
              className="w-full rounded-xl"
              layout="responsive"
            />
          </div>
          <div className="mb-7">
            <h3 className="font-semibold text-center mb-2">
              ・Beauty Consulting
            </h3>
            <Image
              src="/offer-3.png"
              alt="about us image"
              width={100}
              height={200}
              className="w-full rounded-xl"
              layout="responsive"
            />
          </div>
        </div>
      </Container>
    </>
  );
};

export default About;
