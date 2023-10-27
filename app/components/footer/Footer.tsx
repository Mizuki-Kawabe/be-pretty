import React from "react";
import Container from '@mui/material/Container';

const Footer = () => {
  return (
  <>
    <footer className="bg-mb" aria-labelledby="footer-heading">
      {/* <h2 id="footer-heading" className="sr-only">Footer</h2> */}
      <Container max-width="7xl">
        <div className="py-12 mx-auto lg:py-16">
          <div className="md:grid md:grid-cols-5 md:gap-10">
            <div className="col-span-2 sm:mb-2>">
              <h2 className="text-lg font-semibold tracking-wider uppercase text-white">Be Pretty</h2>
              <div className="mt-4 mb-5 sm:mb-10 max-w-md text-white font-extralight">Be Pretty is a passionate team of beauty enthusiasts and experts dedicated to helping you look and feel your absolute best.</div>
              
            </div>
            <div className="grid-cols-3 mt-12 md:mt-0">
              <h3 className="text-lg font-semibold tracking-wider uppercase text-white">Discover</h3>
              <ul role="list" className="mt-4 space-y-4 text-white font-extralight text-base">
                <li>
                  <a href="#">  
                  Products
                  </a>
                </li>

                <li>
                  <a href="#"> Appointment </a>
                </li>

                <li>
                  <a href="#"> About </a>
                </li>

                <li>
                  <a href="#"> Contact </a>
                </li>
              </ul>
            </div>
            <div className="mt-12 md:mt-0 col-span-2 text-white">
              <h3 className="text-lg font-semibold tracking-wider uppercase mb-5 text-white">
              Contact
              </h3>
              <div className="w-full md:max-w-full sm:mb-5">
                  <div className="p-6 border sm:rounded-md">
                <form method="POST" action="https://herotofu.com/start">
      <label className="block mb-6">
        <span>Your name</span>
        <input
          type="text"
          name="name"
          className="
            block
            w-full
            mt-1
            border-white
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "
          placeholder="Sophia Bennett"
        />
      </label>
      <label className="block mb-6">
        <span className="text-gray-700">Email address</span>
        <input
          name="email"
          type="email"
          className="
            block
            w-full
            mt-1
            border-white
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "
          placeholder="SophiaBennett@example.com"
          required
        />
      </label>
      <label className="block mb-6">
        <span className="text-gray-700">Message</span>
        <textarea
          name="message"
          className="
            block
            w-full
            mt-1
            border-white
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "
          rows={3}
          placeholder="Tell us what you're thinking about :)"
        ></textarea>
      </label>
      <div className="mb-6">
        <button
          type="submit"
          className="
            h-10
            px-5
            text-indigo-100
            bg-lightGray
            rounded-lg
            transition-colors
            duration-150
            focus:shadow-outline
            hover:bg-indigo-800
          "
        >
          Contact Us
        </button>
      </div>
      <div>
      </div>
    </form>
  </div>
</div>

            </div>
          </div>
        </div>
        </Container>

    <Container max-width="7xl">
      <hr className="border-t-1 border-lg w-full border-lightGray"></hr>
      <div className="md:mt-0 md:order-1 text-center text-lightGray">
        <div className="text-sm font-light py-6 text-lightGray">
        Copyright © 2023
        <a href="#" className="mx-2" rel="noopener noreferrer">@Be Pretty</a>. Since 2023
        </div>
      </div>
    </Container>
 
</footer>
</>
  )
}

export default Footer;
