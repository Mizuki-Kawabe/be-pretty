import React from "react";
import Container from "../Container";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <footer aria-labelledby="footer-heading" className="bg-beige">
        <Container>
          <div className="py-12 mx-auto lg:py-16 ">
            <div className="md:grid md:grid-cols-5 md:gap-10">
              <div className="col-span-2 sm:mb-2>">
                <h2 className="text-lg font-semibold tracking-wider text-blue">
                  Be Pretty
                </h2>
                <div className="mt-4 mb-5 sm:mb-10 max-w-md text-black font-extralight">
                  Be Pretty is a passionate team of beauty enthusiasts and
                  experts dedicated to helping you look and feel your absolute
                  best.
                </div>
              </div>
              <div className="grid-cols-3 mt-12 md:mt-0">
                <h3 className="text-lg font-semibold tracking-wider text-green">
                  Discover
                </h3>
                <ul
                  role="list"
                  className="mt-4 space-y-4 text-black font-extralight text-base"
                >
                  <li>
                    <Link href="/product">Products</Link>
                  </li>
                  <li>
                    <Link href="/beautician">Beauticians</Link>
                  </li>
                  <li>
                    <Link href="/about">About Us</Link>
                  </li>
                </ul>
              </div>
              <div className="mt-12 md:mt-0 col-span-2">
                <h3 className="text-lg font-semibold tracking-wider mb-5 text-green">
                  Contact
                </h3>
                <div className="w-full md:max-w-full sm:mb-5 bg-lightGreen rounded-xl">
                  <div className="p-6 sm:rounded-md bg-primary-100">
                    <form method="POST" action="https://herotofu.com/start">
                      <label className="block mb-6">
                        <span>Your name</span>
                        <input
                          type="text"
                          name="name"
                          className="
            bg-white
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
          bg-white
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
            bg-white
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
                          className="btn text-white bg-green border-none rounded-full"
                        >
                          Contact Us
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>

        <div className="md:mt-0 md:order-1 text-center text-lightGray bg-blue">
          <Container>
            <div className="text-sm py-6 text-lightGray text-white font-bold">
              Copyright © 2023
              <a
                href="#"
                className="mx-2 text-white font-semibold"
                rel="noopener noreferrer"
              >
                @Be Pretty
              </a>
              . Since 2023
            </div>
          </Container>
        </div>
      </footer>
    </>
  );
};

export default Footer;
